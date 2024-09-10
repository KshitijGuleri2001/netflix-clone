import React,{useState} from "react";
import {Link} from "react-router-dom";

const SignUp = () => {

  const [selectedOption, setSelectedOption] = useState("option1");
  const [lang, setLang] = useState("English");

  const handleChange = (event) => {
    const newLang = event.target.value;
    setSelectedOption(newLang);
    setLang(newLang ===  "option1" ? "English" : "French");
  };

  const translations = {
    English: {
      header: "Unlimited movies, TV shows, and more.",
      watchAnytime: "Watch anytime. Cancel anywhere.",
      readyToWatch: "Ready to watch? Enter your email to create or restart your membership.",
       tv: "Enjoy on your TV.",
       tv1: "  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      show: " Download your shows to watch offline",
      show1: "  Save your favorites easily and always have something to watch. have something to watch.",
      series: "Watch everywhere",
      series1: " Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      Qheading:"Frequently Asked Questions",
      q1:"  What is Netflix ",
      q2:"  How much does Netflix cost?   ",
      q3:"How can I watch?   ",
      q4:"    Is Netflix good for kids?    ",
      btStart:"    Get Started   ",
    },
    French: {
      header: "Films illimités, émissions de télévision et plus encore.",
      watchAnytime: "Regardez à tout moment. Annulez où vous voulez.",
      readyToWatch: "Prêt à regarder ? Entrez votre adresse e-mail pour créer ou réactiver votre abonnement.",
      tv: " Profitez-en sur votre téléviseur.",
      tv1: " Regardez sur les téléviseurs intelligents, PlayStation, Xbox, Chromecast,Apple TV, lecteurs Blu-ray et plus encore.",
      show:"Téléchargez vos émissions sur regarder hors ligne",
      show1:"Enregistrez facilement vos favoris et ayez toujours quelque chose à regarder.avoir quelque chose à regarder.",
      series:"Regardez partout",
      series1:"Diffusez des films et des émissions de télévision en illimité sur votre téléphone, tablette, ordinateur portable et téléviseur.",
      Qheading:"Titre Q",
      q1:"Qu'est-ce que Netflix",
      q2:"Combien coûte Netflix ? ",
      q3:" Comment puis-je regarder ?",
      q4:" Netflix est-il bon pour les enfants ?",
      btStart:"Commencer ",
    },
  };
  return (
    <div className="container mx-auto bg-zinc-800">
      <header>
        <div className="relative">
          <img
            className="w-full h-[625px] object-cover absolute"
            src="https://images.unsplash.com/photo-1627873649417-c67f701f1949?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="relative flex flex-col md:flex-row items-center text-center md:text-end justify-center md:justify-end md:mr-16">
        <div   className="text-black bg-black/40 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 md:mb-0 text-center inline-flex items-center">
  
      <select value={selectedOption} onChange={handleChange}>
    
        <option value="option1">English</option>
        <option  onClick={() => setLang("french")}  value="option2">french</option>
       
      </select>
     
    </div>
         <Link to="/SignIn">
         <button
              type="button"
              className="mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Sign in
            </button>
         </Link>
           
        
        </div>
        <div className="relative text-white items-center py-8 md:py-32">
          <p className="text-2xl md:text-5xl font-bold text-center">
          {translations[lang].header}
          </p>
          <div className="text-center mt-3">
            <span className="text-sm mt-6 text-white items-center text-center">
            {translations[lang].watchAnytime}
        
            </span>
          </div>
          <div className="mt-6 text-center">
            <span>
          {  translations[lang].readyToWatch}
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div>
              <input
                type="text"
                id="large-input"
                placeholder="Email address"
                className="w-full md:w-64 p-4 mt-4 text-gray-600 border rounded-lg sm:text-md dark:bg-black/200 dark:border-gray-200 dark:placeholder-gray-600 dark:text-white"
              />
            </div>
            <div>
             
             <Link to='/home'>
             <button className="w-full md:w-auto p-4 mt-4 text-gray-900 rounded-lg bg-red sm:text-md dark:bg-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-red-700">
             {translations[lang].btStart} 
                </button>
             </Link>
         
           
            
             
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="flex flex-col container mx-auto md:flex-row gap-4 md:gap-8 text-white bg-black mt-28 justify-center">
          <div>
            <img
              className="h-48 md:h-60 mt-4 md:mt-10 mb-4 md:mb-10 py-2 px-4 md:px-10"
              src="https://wallpapercave.com/wp/wp6889318.jpg"
              alt=""
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-4xl font-bold mt-4 md:mt-10 py-2 md:py-5 text-white">
            {translations[lang].tv}
            </p>
            <span>
            {translations[lang].tv1}
            </span>
          </div>
        </div>

        <div className="flex flex-col container mx-auto md:flex-row gap-4 md:gap-8 text-white bg-black mt-2 justify-center">
          <div>
            <p className="text-4xl font-bold mt-10 py-5 text-left">
            {translations[lang].show}  
            </p>
            <span>
            {translations[lang].show1}
            </span>
          </div>
          <div>
            <img
              className="h-48 md:h-60 mt-4 md:mt-10 mb-4 md:mb-10 py-2 px-4 md:px-10"
              src="https://wallpapercave.com/dwp2x/wp1917154.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col container mx-auto md:flex-row gap-4 md:gap-8 text-white bg-black mt-2 justify-center">
          <div>
            <img
              className="h-48 md:h-60 mt-4 md:mt-10 mb-4 md:mb-10 py-2 px-4 md:px-10 item-center"
              src="https://wallpapercave.com/dwp2x/wp6188511.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-4xl font-bold mt-10 py-5 text-left">
            {translations[lang].series}  
            </p>
            <span>
            {translations[lang].series1}  
            </span>
          </div>
        </div>

        <div></div>
      </section>

      <section>
  <div className="bg-black mt-2">
    <div>
      <p className="text-center py-8 text-white text-4xl font-bold">
        {translations[lang].Qheading}
      </p>
    </div>

    <div className="justify-center items-center mt-7">
      <div className="mb-7 md:mb-0">
        <div className="bg-zinc-900 h-[50px] md:w-[300px] mx-auto md:ml-0 rounded-sm">
          <p className="px-5 text-start justify-center py-2 text-white text-xl">
            {translations[lang].q1}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-zinc-900 h-[50px] md:w-[300px] mx-auto md:mr-0 rounded-sm">
          <p className="px-5 text-start justify-center py-2 text-white text-xl">
            {translations[lang].q2}
          </p>
        </div>
      </div>
    </div>

    <div className="md:grid md:grid-cols-2 md:gap-4 justify-center items-center mt-7">
      <div className="mb-7 md:mb-0">
        <div className="bg-zinc-900 h-[50px] md:w-[300px] mx-auto md:ml-0 rounded-sm">
          <p className="px-5 text-start justify-center py-2 text-white text-xl">
            {translations[lang].q3}
          </p>
        </div>
      </div>

      <div>
        <div className="bg-zinc-900 h-[50px] md:w-[300px] mx-auto md:mr-0 rounded-sm">
          <p className="px-5 text-start justify-center py-2 text-white text-xl">
            {translations[lang].q4}
          </p>
        </div>
      </div>
    </div>

    <div>
      <div className="mt-6 text-center text-white mb-4">
        <span>{translations[lang].readyToWatch}</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div>
          <input
            type="text"
            id="large-input"
            placeholder="Email address"
            className="w-full md:w-64 p-4 mt-4 text-gray-600 border rounded-lg sm:text-md dark:bg-black/200 dark:border-gray-200 dark:placeholder-gray-600 dark:text-white"
          />
        </div>
        <div>
          <button className="w-full md:w-auto p-4 mt-4 text-gray-900 rounded-lg bg-red sm:text-md dark:bg-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-red-700">
            {translations[lang].btStart}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


<footer className="bg-black text-gray-50 mt-2">
  <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-clip">
    <div className="flex flex-wrap md:flex-nowrap g text-left py-8">
      <div className="ml-0 md:ml-14 mb-4 md:mb-0">
        <ul className="space-y-4">
          <li>FQA</li>
          <li>investor relations</li>
          <li>privacy</li>
          <li>speed test</li>
        </ul>
      </div>
      <div className="ml-0 md:ml-14 mb-4 md:mb-0">
        <ul className="space-y-4">
          <li>help center</li>
          <li>jobs</li>
          <li>cookie preference</li>
          <li>legal notices</li>
        </ul>
      </div>
      <div className="ml-0 md:ml-14 mb-4 md:mb-0">
        <ul className="space-y-4">
          <li>Account</li>
          <li>ways to watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
      </div>
      <div className="ml-0 md:ml-14 mb-4 md:mb-0">
        <ul className="space-y-4">
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>

 
  </div>
</footer>

    </div>
  );
};

export default SignUp;
