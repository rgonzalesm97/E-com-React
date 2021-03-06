import { useState, useEffect } from "react";
import axios from 'axios';
import pass from "../../pass";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${pass.googleMapsApiKey}`;

    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.resulsts[0].geometry.location);
    }, []);
    return map;
}

export default useGoogleAddress;