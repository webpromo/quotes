
let quotes = [{
        id:0,
        text: "All those Internet quotes attributed to me are absurd.",
        author: "Abe Lincoln",
        category: "quotes"
     },
     {
        id:1,
        text: "We hold these truths to be self-relevant, that all men are created equal...",
        author: "Thomas Jefferson",
        category: "equality"
         },
        { id:2,
           text: "I'm ugly, and I'm proud!",
           author: "SpongeBob",
           category: "body positivity"
        },
        { id:3,
             text: "Let the past die. Kill it if you have to.",
             author: "Kylo Ren",
             category: "progress"
         }   ,
         { id:4,
              text: "You got to put your behind in your past.",
              author: "Pumbaa",
              category: "discouragement"
          },
          { id:5,
               text: "What’s normal anyways?",
               author: "Forrest Gump",
               category: "diversity"
           }  ,
           { id:6,
                text: "Roads? Where we're going, we don't need roads.",
                author: "Dr. Emmett Brown",
                category: "tech"
            },
            { id:7,
                 text: "You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.",
                 author: "Morpheus",
                 category: "reality"
             }       
        
    ];   
let id = 8; // must be ONE MORE than the number of objects hard-coded above 

module.exports ={
    read: (req,res) => {
        res.status(200).send(quotes);
    },
    create: (req,res) => {
        const { text, author, category } = req.body.newQuoteObj;
        let quote = {
            id: id,
            text: text,
            author: author,
            category:category
        }
        quotes.push(quote);
        id++;
       res.status(200).send(quotes);
    },
    update: (req,res) => {
        let index = null;
        quotes.forEach((quote, i) => {
          if(quote.id === Number(req.params.id)) {
              index = i;
          }
        })
        quotes[ index ] ={
            id: quotes [ index ].id,
            text: req.body.text || quotes[index].text,
            author: req.body.author || quotes[index].author,
            category: req.body.category || quotes[index].category
        }
        res.status(200).send(quotes);
    },
    delete: (req,res) => { 
        let index = null;
        quotes.forEach((quote, i) => {
          if(quote.id === Number(req.params.id)) {index = i}
        })
        quotes.splice(index,1)
        res.status(200).send(quotes);
    }
};