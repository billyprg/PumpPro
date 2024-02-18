export class AuthRoutes {
    static LOGIN = 'auth/login';
    static REGISTER = 'auth/register-store';
    static LOGOUT = 'auth/logout';
    static COMPLETE_PROFILE = 'auth/complete-profile-store'
   
  }
  
  export class AdminAppRoutes {
    static GET_REVENUE = 'auth/revenue/';
  }


  export class ManagerAppRoutes {
   static ADD_VENDOR = 'auth/supplier/store';
   static GET_VENDOR = 'auth/supplier';
  }
  
  
  export class CommonAppRoutes {
    static SET_CURRENT_RATES = 'auth/fuel-type/store';
    static GET_CURRENT_RATES = 'auth/fuel-type/';
    static EXPENSES = 'auth/expenses/store';
    static GET_EXPENSES = 'auth/expenses/';
    
    
   }
   
   