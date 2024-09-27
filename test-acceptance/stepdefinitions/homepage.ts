import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function assertTamanhoEqual(set, n) {
    await set.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(n));
}

async function assertIncludesInName(set, name) {
    expect(Promise.resolve(set.getText())).to.eventually.includes(name);
}

let sameName = ((elem, name) => elem.element(by.name('nome')).getText().then(text => text.toLowerCase() === name.toLowerCase()));

let hasInName = (elem, name) => elem.element(by.name('nome')).getText().then(text => text.toLowerCase().includes(name.toLowerCase()));

async function assertMusicsWithSameName(n, name) {
    var allmusics: ElementArrayFinder = element.all(by.name("music-container"));
    var samenames = allmusics.filter(elem => sameName(elem, name));
    await assertTamanhoEqual(samenames, n);
}

defineSupportCode(function ({ Given, When, Then }) {
    //Given que eu esteja logado como um usuário comum no serviço (usuário “vgc3” e a senha “abc1234”)
    
    Given(/^eu estou na página "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/busca");
        await expect(browser.getTitle()).to.eventually.equal(name);
    });

    When(/^eu cliclo no botão "([^\"]*)"$/, async (home) => {
        await element(by.name(home.toString())).click();
    });

    //Then qualquer definição não salva feita em outra página será perdida

    Then(/^eu estou vou para a página "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal(name);
    });

    //////////////////////////////////////////////////////////////////////////

    Given(/^eu estou na página "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/busca");
        await expect(browser.getTitle()).to.eventually.equal(name);
    });

    //And logado com o usuário “vgc3” e a senha “abc1234”

    When('eu percorro a página', function () {
        // Navigate through the page
    });

    //Then eu consigo ver “recomendações”, “musicas em alta” e as “minhas playlists”

    //////////////////////////////////////////////////////////////////////////

    Given(/^eu estou na página "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/busca");
        await expect(browser.getTitle()).to.eventually.equal(name);
    });

    //And logado com o usuário “vgc3” e a senha “abc1234”

    When(/^eu cliclo no botão "([^\"]*)"$/, async (sair) => {
        await element(by.name(sair.toString())).click();
    });

    Then(/^eu sou direcionado novamente para a seção "([^\"]*)"$/, async (login) => {
        await browser.get("http://localhost:4200/login");
        await expect(browser.getTitle()).to.eventually.equal(login);
    });

    //And minhas credenciais serão pedidas novamente

    //////////////////////////////////////////////////////////////////////////

    Given(/^eu estou na página "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/busca");
        await expect(browser.getTitle()).to.eventually.equal(name);
    });

    //And tenha optado por não fazer login (entrado como guest)

    When(/^eu cliclo no botão "([^\"]*)"$/, async (sair) => {
        await element(by.name(sair.toString())).click();
    });

    Then(/^eu sou levado para a seção "([^\"]*)"$/, async (login) => { 
        await browser.get("http://localhost:4200/login");
        await expect(browser.getTitle()).to.eventually.equal(login);
    });

    //And aparece a mensagem "Você precisa estar logado para acessar playlists próprias"
});