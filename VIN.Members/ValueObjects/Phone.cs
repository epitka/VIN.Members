using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using VIN.Members.Domain.Infrastructure;
using VIN.Members.Domain.Infrastructure.Execeptions;

namespace VIN.Members.Domain.ValueObjects
{
    public class Phone : ValueObject
    {
        private readonly int _areaCode;
        private readonly int _prefix;
        private readonly int _lineNumber;

        private string _value;

        public Phone(int areaCode, int prefix, int lineNumber )
        {
            EnsureAreaCode(areaCode);
            EnsurePrefix(prefix);
            EnsureLineNumber(lineNumber);

            _areaCode = areaCode;
            _prefix = prefix;
            _lineNumber = lineNumber;

            var val = new [] {_areaCode, _prefix, _lineNumber};

            _value = string.Join("", val);
        }

        public Phone(int phoneNumber)
        {
            var phoneStr = phoneNumber.ToString();

            if (phoneStr.Length != 10)
            {
                throw new MemberDomainException("Phone number must be exactly 10 characters.");
            }

            var areaCode = int.Parse(phoneStr.Substring(0, 3));
            var prefix = int.Parse(phoneStr.Substring(3, 3));
            var lineNumber = int.Parse(phoneStr.Substring(7, 3));

            EnsureAreaCode(areaCode);
            EnsurePrefix(prefix);
            EnsureLineNumber(lineNumber);

            _areaCode = areaCode;
            _prefix = prefix;
            _lineNumber = lineNumber;

            _value = AreaCode + Prefix + LineNumber;
        }

        private static void EnsureLineNumber(int lineNumber)
        {
            if (lineNumber.ToString().Length != 4)
            {
                throw new MemberDomainException("Phone line number must be exactly 4 digits");
            }
        }

        private static void EnsurePrefix(int prefix)
        {
            if (prefix.ToString().Length != 3)
            {
                throw new MemberDomainException("Phone prefix  must be exactly 3 digits");
            }
        }
        
        private static void EnsureAreaCode(int areaCode)
        {
            if (areaCode.ToString().Length != 3)
            {
                throw new MemberDomainException("Phone area code must be exactly 3 digits");
            }
        }
        
        public string AreaCode => _areaCode.ToString();
        public string Prefix => _prefix.ToString();
        public string LineNumber => _lineNumber.ToString();
        
        public string Formated()
        {
            return $"({_areaCode}) {_prefix}-{_lineNumber}";
        }

        public override string ToString()
        {
            return _value;
        }

        public string Value => _value;

        public static implicit operator string(Phone phone)
        {
            return  phone?._value;
        }

        public static implicit operator Phone(string phone)
        {

            int number;

            if (int.TryParse(phone, out number) == false)
            {
                throw  new MemberDomainException("Phone number must contain digits only");
            }

            return new Phone(number);
        }
        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return  _value;
        }
        
    }
}
