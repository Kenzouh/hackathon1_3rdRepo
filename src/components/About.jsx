import React from 'react'

const About = () => {
  return (
    <div className='overflow-y-scroll overflow-hidden pr-4'>
      <div className=' bg-white dark:bg-slate-800 dark:text-slate-300 rounded-3xl px-8 pb-8'>
      <br></br>

      <p className="text-center text-3xl font-bold">Cloaver</p>
      <p className="text-center">(MSME-Bank Relationship Builder)</p>
      <br></br>
      <p className="indent-8 text-justify ml-4 mr-10">Hi! Welcome to Cloaver! Cloaver is a name which is a mixture of 
        CLoVer + lOAn + helpER! With Cloaver, you'll be guided in what actions you should take as an micro, small, medium 
        enterprise (MSME) owner. Not sure if you will take a loan or a credit card offer? Cloaver is here for you with the 
        data visualization graphs about the most famous loans and the types of credit cards being used by MSME owners.</p><br></br>

      <p className="indent-8 text-justify ml-4 mr-10">Our website gives you an insight about the patterns 
        and trends of MSMEs through data visualizations using the data provided by the Bank of the 
        Philippine Islands (BPI).  the contestants of BPI D.A.T.A. WAVE Hackathon gathered the data 
        from the .parquet files provided by BPI. Using the data visualizations created in Tableau, 
        the developers  found out a lot of information about the MSMEs. They have separated the Micro, Small
        and Medium business owner categories to different pages. By navigating these pages, the business owners
        will have insights on what are the benefits of taking loans, how much loans are the best for them and what
        kind of business transactions will assist them in achieving success.</p>
      <br></br>

      <p className="indent-8 text-justify ml-4 mr-10">With the different business categories in the sidebar, the
        business owners belonging to either micro/small/medium businesses will see that taking loans and getting assistance from
        the bank is beneficial for them. This will create a smooth and good relationship between the MSMEs and the Philippine banks. If the business owners are unsure if they will take a loan from the bank, there
        is a "Loan Calculator" page for them to use which will compute their desired loan amount and will measure how much will it be
        within the given loan tenure (how long they plan on paying the loan) which has a scope of 1–5 years.</p>
      
      </div>
      
      <br></br>
      <h2 className="text-3xl font-semibold dark:text-slate-300">About Us</h2>

      <p className="text-justify border-b pb-2 dark:text-slate-300">Our development team consists of four dedicated developers, divided into two groups: frontend and backend.</p>
      <br></br>

      <div className='grid grid-cols-2 gap-4 dark:text-slate-300'>
        <div className='flex rounded-3xl shadow-sm bg-white dark:bg-slate-800 p-4'>
          <img src="/img/Kenzo.jpg" class="image mr-10" alt="kenzo"/>
          <p className="indent-8 text-justify ml-4 mr-10"><b>Kenzo C. Ragundiaz</b> is the team leader of the 
            Eizhel group in the BPI D.A.T.A. WAVE Hackathon. He is the project manager and  in charge of the 
            front end (website interface), data visualization specialist and assigning the tasks of the members.</p>
        </div>
        <div className='flex rounded-3xl shadow-sm bg-white dark:bg-slate-800 p-4'>
        <img src="/img/Reigniel.jpg" class="image mr-10"/>
          <p className="indent-8 text-justify ml-4 mr-10"><b>Reigniel Cabela</b> is part of the front end 
            team. He is the one that designed the sidebar, the light and dark mode themes, the user interface 
            and user experience (UI/UX) and the dashboard of the data visualization 
            page. He also gave feedbacks and assisted in the data visualizations.</p>
        </div>
        <div className='flex rounded-3xl shadow-sm bg-white dark:bg-slate-800 p-4'>
        <img src="/img/JohnCarlo.jpg" class="image mr-10"/>
          <p className="indent-8 text-justify ml-4 mr-10"><b>John Carlo Lorieta</b> is also a front end designer, 
            the back end developer, the data scientist in charge of creating the data visualization charts using Tableau.
            He also created the "Loan Calculator."</p>
        </div>
        <div className='flex rounded-3xl shadow-sm bg-white dark:bg-slate-800 p-4'>
        <img src="/img/Renze.png" class="image mr-10"/>
          <p className="indent-8 text-justify ml-4 mr-10"><b>Renze Torino</b> A Data Scientist dedicated to ensuring data 
          quality and backend efficiency. Utilizes Tableau for data cleaning, analysis, and impactful visualization creation.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About;