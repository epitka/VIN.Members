using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using VIN.Members.Domain.Entities.EFConfiguration;
using VIN.Members.Domain.Infrastructure.Execeptions;

namespace VIN.Members.Domain.Infrastructure
{
    public interface IRequestManager
    {
        Task<bool> Exist(Guid id);

        Task CreateRequestForCommand<T>(Guid id);
    }
    public class RequestManager : IRequestManager
    {
        private readonly MemberContext _context;

        public RequestManager(MemberContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        
        public async Task<bool> Exist(Guid id)
        {
            var request = await _context.
                FindAsync<ClientRequest>(id).ConfigureAwait(false);

            return request != null;
        }

        public async Task CreateRequestForCommand<T>(Guid id)
        {
            var exists = await Exist(id).ConfigureAwait(false);

            var request = exists ?
                throw new MemberDomainException($"Request with {id} already exists") :
                new ClientRequest()
                {
                    Id = id,
                    Name = typeof(T).Name,
                    Time = DateTime.UtcNow
                };

            _context.Add(request);

            await _context.SaveChangesAsync().ConfigureAwait(false);
        }
    }
}
