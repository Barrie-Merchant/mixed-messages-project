const movqs = [
    {
    film: 'The Godfather',
    character: 'Don Corleone',
    quote: "I'm gonna make him an offer he can't refuse"
    },
    {
    film: 'Wizard of Oz',
    character: 'Dorothy',
    quote: "Toto, I have a feeling we're not in Kansas anymore. "  
    },
    {
    film: 'Dirty Dancing',
    character:'Johnny Castle',
    quote: 'Nobody puts Baby in the corner.'
    },
    {
    film: 'Titanic',
    character: 'Jack Dawson',
    qoute: "I'm the King of the World!!"
    },
    {
    film: 'Scarface',
    character: 'Tony Montana',
    qoute: 'Say hello to my little friend!!'    
    },
    {
    film: 'Dr No.',
    character: 'James Bond',
    qoute: 'Bond, James Bond'
    },
    {
    film: 'The Dark Knight',
    character: 'Joker',
    qoute: 'Why so Serious?!!'
    },
    {
    film: 'Endgame',
    character: 'Tony Stark',
    qoute: 'Love you 3000'  
    }
];




let answer = () => {
const random = Math.floor(Math.random() * movqs.length);
switch(random) {
    case 0:
        return movqs[0];
        break;
        case 1:
            return movqs[1];
            break;
            case 2:
                return movqs[2];
                break;
                case 3:
                    return movqs[3];
                    break;
                    case 4:
                        return movqs[4];
                        break;
                        case 5 :
                            return movqs[5];
                            break;
                            case 6:
                                return movqs[6];
                                break;
                                case 7:
                                    return movqs[7];
                                    break;
}
}

console.log(answer());