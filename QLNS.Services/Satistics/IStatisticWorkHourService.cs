﻿using QLNS.Entity.RelationShips;
using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Satistics
{
    public interface IStatisticWorkHourService
    {
        Task<List<WorkhourStatistic>> GetallPage(int month, int year);

        Task<List<WorkhourStatistic>> GetAll(int month, int year);

        Task<List<double[]>> GetAllWeeksinMonth(int month, int year);

        Task<double[]> GetAllMonthinYear(int year);

        Task<EmployeeWork> GetemployeesinWeek(string datestring);
    }
}