const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiady',
    publisher: {
        name: 'penguine'
    }
}

const {name: publisherName = 'Anonymus'} = book.publisher
if (publisherName){

    console.log(publisherName)
}