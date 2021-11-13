import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const PrivateRoute = ({children,...rest}) => {

    const { user, loading } = useAuth()
    
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

                user?.email ? (children)
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

export default PrivateRoute;