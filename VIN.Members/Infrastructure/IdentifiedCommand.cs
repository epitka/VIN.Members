﻿using System;
using System.Collections.Generic;
using System.Text;
using MediatR;

namespace VIN.Members.Domain.Infrastructure
{
    public class IdentifiedCommand<T, R> : IRequest<R>
        where T : IRequest<R>
    {
        public T Command { get; }
        public Guid Id { get; }

        public IdentifiedCommand(T command, Guid id)
        {
            Command = command;
            Id = id;
        }
    }
}
