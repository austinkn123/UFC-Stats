import React from 'react'

const TableSummaryText = () => {
  return (
    <div className='pt-8'>
        <p>
            My UFC Fighters page contains relevant information on every fighter who’s fought a fight in the UFC given to me by the api.
            Try clicking on a row on the table to see more about the fighter's information. 
        </p>
        <p className='pb-4 text-red-600'>
            Note: Some data from this api is extremely inaccurate. Such as some of the fighters weight over 300lbs. 
            I do not know if there is another measuring unit but the all the ones I used are inaccurate. I have no control
            over the backend api so I can only show what is given to me. :(
        </p>
        <h1 className='text-4xl font-semibold'>
            UFC Fighters Chart Explained
        </h1>
        <p className='py-4 border-b'>
            Name: This is pretty straightforward. It’s the fighter’s first and last name. I probably don't need to explain this.
        </p>
        <p className='py-4 border-b'>
            Nick Name: A fighter can't choose their nickname; it's one of those things that's given to a fighter. 
            Like a ceremonial gift from a coach of peer, a nickname means something. Or in some cases, it's simply an inside 
            joke within the gym, like Junior dos Santos being called "Cigano" because of his long hair. Some do not have a 
            nickname.
        </p>
        <p className='py-4 border-b'>
            Date of Birth: A fighter’s date of birth reveals how fit and spry they may be. For instance, a older fighter, while 
            still in shape, may not fare well against an opponent who is younger because they can’t move as fast as they once did. 
        </p>
        <p className='py-4 border-b'>
            Wins: This is the amount of wins they’ve had over the course of their career.
        </p>
        <p className='py-4 border-b'>
            Losses: This is the amount of loses they’ve had over the course of their career.
        </p>
        <p className='py-4 border-b'>
            Height: How tall a fighter is can tell you how they measure in terms of feet and inches. Pretty cool, eh?
        </p>
        <p className='py-4 border-b'>
            Weight: How much a fighter weighs will tell you what weight class they’re in. 
            Tyron Woodley weighs 170 pounds making him a welterweight. 
        </p>
        <p className='py-4'>
            Reach: This is the length of a fighter’s arms which can give standup fighters and incredible advantage.  
        </p>
    </div>
  )
}

export default TableSummaryText
