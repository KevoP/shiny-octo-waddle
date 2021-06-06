import React from "react"

/**
 * get the config Object
 */
export const getConfig = async () => {
   const response = await fetch('config.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const config = await response.json();
    return config;
};

export const loadComponent = ({category, type, variant = "Default"}) => 
   React.lazy(() => import(`../components/${category}/${type}/${variant}.js`));