class GenRandomMessage {
    constructor(username) {
        this.username = username;
        // if (this.username == undefined) this.username = "Um novo membro";
    };
    
    randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    getMessages = async () => {

        return [
            `Olha quem finalmente chegou, pessoal! \n Sinta-se à vontade <@${this.username}>!!`,

            `Mais uma pessoa no grupo, finalmente. \n Seja bem vindo(a) <@${this.username}>`,

            `Entrou no grupo o próximo gênio de uma geração: <@${this.username}>`, 

            `<@${this.username}> embarcou no foguete, seja bem vindo(a)!`,

            `<@${this.username}> colou com a gente, agora o grupo anda hehe`,

            `<@${this.username}> chegou junto galera!`,
            
            `<@${this.username}>, sinta-se em casa!`
        ];
    }

    getRandomMessage = async () => {
        const AllMessages = await this.getMessages(this.username);
        let result;
        
        const min = 0;
        const max = AllMessages.length;
        
        let index = this.randomNumber(min, max);
        let message = AllMessages[index];
    
        message == undefined ? result = message[5] : result = message;
    
        return result;
    }

}

module.exports = GenRandomMessage;
