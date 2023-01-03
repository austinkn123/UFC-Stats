import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const FigherPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [fighter, setFighter] = useState({});
    const [CareerStats, setCareerStats] = useState({});
    useEffect(() => {
        fetch(`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${id}?key=d5bf379ab61e488d9b81de7d86bae8ea`)
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setFighter(data);
        setCareerStats(data.CareerStats);
        console.log(data);
        console.log(data.CareerStats);
        
        }
    );

    }, [])

    return (
        <div>
            {fighter.BirthDate}
            {CareerStats.FirstName}
            {CareerStats.LastName}
            {CareerStats.SigStrikesLandedPerMinute}
            {CareerStats.SigStrikeAccuracy}
            {CareerStats.TakedownAverage}
            {CareerStats.SubmissionAverage}
            {CareerStats.KnockoutPercentage}
            {CareerStats.TechnicalKnockoutPercentage}
            {CareerStats.DecisionPercentage}

        </div>
    )
}

export default FigherPage