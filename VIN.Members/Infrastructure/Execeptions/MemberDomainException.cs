using System;

namespace VIN.Members.Domain.Infrastructure.Execeptions
{
    public class MemberDomainException : Exception
    {
        public MemberDomainException()
        { }

        public MemberDomainException(string message)
            : base(message)
        { }

        public MemberDomainException(string message, Exception innerException)
            : base(message, innerException)
        { }
    }
}
