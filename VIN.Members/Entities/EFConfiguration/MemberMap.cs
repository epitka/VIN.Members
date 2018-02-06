using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VIN.Members.Domain.Entities.EFConfiguration
{
    public class MemberMap : IEntityTypeConfiguration<Member>
    {
        public void Configure(EntityTypeBuilder<Member> member)
        {

            member.ToTable("Members", MemberContext.DEFAULT_SCHEMA);
            member.UsePropertyAccessMode(PropertyAccessMode.Field);
            
           // member.HasQueryFilter(obj => EF.Property<bool>(obj, "IsDeleted") == false);

            member.HasKey(o => o.Id);

            member.HasIndex(x => x.UserName).IsUnique(true);

            member.Property(x => x.DateOfBirth)
                .IsRequired()
                .HasColumnName("DateOfBirth");

            member.Property(x => x.Email)
                .IsRequired()
                .HasColumnName("Email");

            #region "Name mapping"

            //NHiberante  has much cleaner way of mapping value objects, this is horrible
            member.OwnsOne(x => x.Name)
                .Property(x => x.FirstName)
                .IsRequired()
                .HasMaxLength(100)
                .HasColumnName("FirstName");

            member.OwnsOne(x => x.Name)
                .Property(x => x.LastName)
                .IsRequired()
                .HasMaxLength(100)
                .HasColumnName("LastName");

            #endregion

            member.Property(x => x.UserName)
                .IsRequired()
                .HasMaxLength(12)
                .HasColumnName("UserName");

            member.Property(x => x.Phone)
                .HasMaxLength(10)
                .HasColumnName("Phone");

           // member.Property<bool>("IsDeleted");
        }
    }
}


