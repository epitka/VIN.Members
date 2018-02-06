using System;
using System.Collections.Generic;
using System.Text;

namespace VIN.Members.Domain.Infrastructure.Execeptions
{
    public class DomainValidationException : Exception
    {
        public DomainValidationException()
        { }

        public DomainValidationException(string message)
            : base(message)
        { }

        public DomainValidationException(string message, Exception innerException)
            : base(message, innerException)
        { }
    }
}
