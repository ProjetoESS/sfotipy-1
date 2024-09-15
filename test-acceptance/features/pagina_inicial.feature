Feature: Pagina Inicial
    As a usuário qualquer do serviço
    I want to acessar a página Inicial
    So that eu possa ter informaçoes e conteúdos relevantes organizados e expostos para mim

    Scenario: Voltar à página inicial
        Given eu esteja logado com o usuário "vgc3" e a senha "abc1234"
        And eu esteja na página "Busca"
        When eu clico no botão "home" uma vez
        Then eu vou diretamente para a página inicial do serviço

    Scenario: Visualizar informações públicas e do usuário
        Given eu esteja na página inicial "Sfotipy"
        And eu esteja logado com o usuário "vgc3" e a senha "abc1234"
        When eu percorro a página
        Then eu consigo ver "Recomendações para você", "Playlists Públicas", "Playlists em alta" e as "Minhas Playlists"

    Scenario: Sair do serviço
        Given eu esteja na página inicial "Sfotipy"
        And eu esteja logado com o usuário "vgc3" e a senha "abc1234"
        When eu clico no ícone de "sair" no "profile"
        Then eu sou levado para a pagina de "Login"
        And minhas credenciais serão pedidas novamente

    Scenario: Visualizar informações para usuário não logado
        Given eu esteja na página inicial "Sfotipy"
        And eu tenha optado por não fazer login
        When eu percorro a página
        Then eu consigo ver apenas as "musicas em alta" e as "playlists públicas"

    Scenario: Minhas Playlists de usuário não logado
        Given eu esteja na página inicial "Sfotipy"
        And eu tenha optado por não fazer login
        When eu clico no botão "playlists"
        Then eu sou levado para a pagina de "Login"

    Scenario: Acessar perfil do usuário
        Given eu esteja na página inicial "Sfotipy"
        And eu esteja logado com o usuário "vgc3" e a senha "abc1234"
        When eu clico no botão "perfil"
        Then eu posso ver meu dados "Victor" e "0"

    Scenario: Minhas Playlists de usuário logado
        Given que eu esteja na pagina inicial
        And eu esteja logado com o usuário "vgc3" e a senha "abc1234"
        When eu clico no botão "Playlists"
        Then eu sou levado para a pagina de "Minhas Playlists"
        And eu posso ver uma lista com as mihas playlists "Pop Mix", "Electric Vibe" e "Study lofi"