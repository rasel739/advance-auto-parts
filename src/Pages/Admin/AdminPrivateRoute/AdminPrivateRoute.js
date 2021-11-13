import React from 'react';
import { Redirect, Route } from "react-router";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import useAuth from '../../../hooks/useAuth';

const AdminPrivateRoute = ({ children, ...rest }) => {

    const { user, loading,admin } = useAuth()
    
    if (loading) {
        
        return (
          <Box sx={{ width: "100%" }}>
            <LinearProgress sx={{ backgroundColor:'orange' }} />
          </Box>
        );
    }

    return (
      
        <Route
            {...rest}
            render={({ location }) =>

                user?.email && admin ? (children)
                    :
                    (<Redirect
                        to={{
                        
                            pathname: '/login',
                            state:{from:location}
                    }}
                    
                    />)
        
        }
        
        />
  );
};

export default AdminPrivateRoute;