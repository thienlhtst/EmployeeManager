﻿using QLNS.Entity.Entities;
using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Ranks
{
    public class RankCreateRequest
    {
        public string IDrank { get; set; }
        public string RankRoleID { get; set; }

        [Required(ErrorMessage = "Name is required"), StringLength(50, MinimumLength = 2)]
     
        public string Name { get; set; }
    }
}