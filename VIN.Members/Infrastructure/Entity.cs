using System;
using System.Collections.Generic;
using System.Text;

namespace VIN.Members.Domain.Infrastructure
{
    public class Entity
    {
        public Entity()
        {
            _id = Guid.NewGuid();
        }

        private Guid _id;
        public Guid Id
        {
            get { return _id; }
            protected set
            {
                _id = value;
            }
        }
        
        public override bool Equals(object obj)
        {
            if (!(obj is Entity)) return false;

            if (ReferenceEquals(this, obj))
            {
                return true;
            }

            if (this.GetType() != obj.GetType())
            {
                return false;
            }

            var item = (Entity)obj;

            return item.Id == this.Id;
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode() ^ 31;
        }

        public static bool operator ==(Entity left, Entity right)
        {
            if (left == null)
            {
                return (right == null) ? true : false;
            }
            else
            {
                return left.Equals(right);
            }
        }

        public static bool operator !=(Entity left, Entity right)
        {
            return !(left == right);
        }

    }
}
