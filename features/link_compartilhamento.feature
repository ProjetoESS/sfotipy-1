Feature: Gerar link de compartilhamento
    As a usuário com login e senha
    I want to compartilhar o link de uma playlist pública
    So that o link é gerado e pode ser compartilhado

    Scenario: geração de link de compartilhamento 
        Given eu sou um usuário com login “jsa2” e senha “123”
        And estou na playlist "minhas favoritas" que é pública com id "1"
        When seleciono a opção de compartilhar uma "minhas favoritas"
        Then o link "localhost:3000/playlist/1" é gerado
        And uma opção para copiá-lo é mostrada.   

    Scenario: gerando link de playlist privada
        Given sou um usuário da playlist "minhas favoritas" que é privada
        And possuo login "jsa2" e senha "123" e não sou o dono de "minhas favoritas"
        When seleciono a opção de compartilhar playlist
        Then recebo uma mensagem de erro "Não tem permissão para essa ação, você não é dono de minhas favoritas"