using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using VIN.Members.Domain.Infrastructure;
using VIN.Members.Domain.Infrastructure.Execeptions;
using VIN.Members.Domain.Services;
using VIN.Members.Domain.ValueObjects;

namespace VIN.Members.Domain.Entities
{

    public class Member : Entity, ISoftDeletable
    {
        //needed for EF
        protected Member()
        {

        }

        protected internal Member(UserName userName, Name name, Email email, DateOfBirth dateOfBirth, Phone phone = null)
        { 
            Guard.NotNull(userName, nameof(userName));
            Guard.NotNull(name, nameof(name));
            Guard.NotNull(email, nameof(email));
            Guard.NotNull(dateOfBirth, nameof(dateOfBirth));

            _userName = userName;
            _name = name;
            _dateOfBirth = dateOfBirth;
            _email = email;
            _phone = phone;
        }

        private string _userName;
        public string UserName => _userName;

        private Name _name;
        public Name Name => _name;

        private string _email;
        public string Email => _email;

        private DateTime _dateOfBirth;
        public DateTime DateOfBirth => _dateOfBirth;

        private string _phone;
        public string Phone => _phone;

        protected internal async Task SetUserName(UserName userName, IUserNameVerifier userNameVerifier)
        {
            Guard.NotNull(userNameVerifier, nameof(userNameVerifier));
            Guard.NotNull(userName, nameof(userName));

            if (userName != UserName)
            {
                var isUnique = await userNameVerifier.IsUnique(userName)
                                                    .ConfigureAwait(false);

                if (isUnique == false)
                {
                    throw new DomainValidationException($"Username {userName} already exists");
                }

                _userName = userName;
            }

            //TODO: add domain event that user name has changed
        }

        protected internal void SetName(Name name)
        {
            Guard.NotNull(name, nameof(name));

            if (name.Equals(Name)) return;

            //NOTE: EF throws and error if instance is replaced. There is an open issue for this. 
            // Let's try reflection for now. There is workaround, instead of exposing Name, expose First and Last in mapping
            //_name = name;

            var ti = _name.GetType();
            
            var fi = ti.GetField("_firstName", BindingFlags.GetField | BindingFlags.NonPublic | BindingFlags.Instance);
            
            fi.SetValue(_name,name.FirstName);

            var fi2 = ti.GetField("_lastName", BindingFlags.GetField | BindingFlags.NonPublic | BindingFlags.Instance);

            fi2.SetValue(_name, name.LastName);
        }

        protected internal void SetContactInfo(Email email, Phone phone)
        {
            Guard.NotNull(email, nameof(email));

            if (_email != email)
            {
                _email = email;
            }

            if (_phone != phone)
            {
                _phone = phone;
            }
        }

        protected internal void SetDateOfBirth(DateOfBirth dob)
        {
            if (_dateOfBirth != dob)
            {
                _dateOfBirth = dob;
            }
        }


        //protected internal void MarkAsDeleted()
        //{
        //    _isDeleted = true;
        //}

        //private bool _isDeleted;
        //public bool IsDeleted {
        //    get { return _isDeleted; }
        //}

    }
}
