


let quotes = [];
let id = 0;

module.exports ={
    read: (req,res) => {
        res.status(200).send(quotes);
    },
    create: (req,res) => {
        // console.log('HERE: '+req.body);
        const { text, author, category } = req.body;
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
            title: req.body.title || quotes[index].title,
            author: req.body.author || quotes[index].author
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