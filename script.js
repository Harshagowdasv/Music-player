let audio=document.getElementById("audio");
    let image=document.getElementById("image");

    const music=[

    {
        "image":"https://english.mathrubhumi.com/image/contentid/policy:1.10338923:1739434269/rcb.jpg?$p=5331a0e&f=16x9&w=1080&q=0.8",
        "audio":"./In the Temple Garden - Aaron Kenny.mp3"
    },


    {"image":"https://static.cricketaddictor.com/images/posts/2024/Royal-Challengers-Bengaluru.webp?q=80",
    "audio":"./Inspiring & Uplifting Epic Cinematic Background Music  No Copyright.mp3"
    },

    {
        "image":"https://im.indiatimes.in/content/2024/Nov/Untitled-design-19_6746e347e60de.jpg?w=1200&h=900&cc=1&webp=1&q=75",
        "audio":"./In the Temple Garden - Aaron Kenny.mp3"
    },

    {
        "image":"https://preview.redd.it/rcb-womens-team-retained-and-released-players-for-wpl-2025-v0-3s7ucmu4xgzd1.jpeg?auto=webp&s=8f7f9de1c14da161acab71ad2894a4e8f6d02fe9",
        "audio":"./Never Surrender - Anno Domini Beats.mp3"
    }
    ];




    let current=0;

    function loadmusic(index){
        image.src=music[index].image;
        audio.src=music[index].audio;
        audio.play();
    }

    audio.addEventListener("play",()=>{
        image.classList.toggle("rotate");
    });

    audio.addEventListener("pause",()=>{
        image.classList.remove("rotate");
    });

    audio.addEventListener("ended",()=>{
        image.classList.remove("rotate");
    });


    document.getElementById("next").addEventListener("click",()=>{
        current=(current+1)%music.length;
        loadmusic(current);
    });

    document.getElementById("prev").addEventListener("click",()=>{
        current=(current-1+music.length)%music.length;
        loadmusic(current);
    });

    loadmusic(current);