import React from 'react'

const FightSummaryText = () => {
  return (
    <div className='pt-16'>
      <h1 className='font-Table font-semibold text-4xl py-4 border-b'>
        FIGHT Statistics Explained
      </h1>
      <div className='py-4 border-b'>
        <span className='font-bold'>Record: </span>
        The number of wins, losses, draws and no contests in a fighter's career in UFC, WEC, PRIDE, DREAM and Strikeforce.
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Knockdown: </span>
        A knockdown is awarded to a fighter who knocks his/her opponent down due to debilitation for what 
        the official scorers consider a substantial amount of time.
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Strikes: </span>
        These striking statistics refer to the number of significant strikes. This number includes 
        all strikes at distance and power strikes in the clinch and on the ground. It does not include short strikes 
        in the clinch and on the ground.
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Takedowns: </span>
        A takedown is awarded when a fighter deliberately grapples his opponent to the ground 
        and establishes an advantageous position for an appreciable amount of time.
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Submission Attempts: </span>
        This reflects the number of actual submission holds applied. It does not count movements 
        that only seek a submission, e.g., a fighter on bottom who swings his hips for an armbar but does not lock the 
        arm and apply force.
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Advances: </span>
        A advance is scored for each incremental positional advancement on the ground, e.g., a move from side 
        control to mount. The advancing fighter must establish the new position for an appreciable amount of time.
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Reversals: </span>
        A reversal is scored when the bottom fighter actively moves to establish top position, without his 
        opponent getting back to his feet in between.
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Odds: </span>
        Odds are the measure of how much you can win vs. how much you bet, per $100. Odds are included in all forms of 
        betting, whether it’s moneylines, spreads, or totals. -110, for example, means $110 wager for $100 potential profit 
        (or $11 wager for $10 potential profit)
      </div>
      <div className='py-4 border-b'>
        <span className='font-bold'>Fantasy Points: </span>
        Fighters are also awarded points for when they win the bout, those values are as follows:
        <div className='pl-4'>
          <div className='pt-2'>1st Round Win = 100pts</div>
          <div>2nd Round Win = 75pts</div>
          <div>3rd Round Win = 50pts</div>
          <div>4th Round Win = 35pts</div>
          <div>5th Round Win = 25pts</div>
          <div>Decision Win = 20pts</div>
        </div>
        
      </div>
      
    </div>
  )
}


export default FightSummaryText