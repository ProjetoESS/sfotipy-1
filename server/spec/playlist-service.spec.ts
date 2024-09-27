import 'jasmine'
import { PlaylistService } from '../src/playlist-service'
import { Playlist } from '../../common/playlist'
import { User } from '../../common/user'

describe('PlaylistService', () => {
    var timeout : number;
    var playlistService : PlaylistService;

    var newPlaylist = new Playlist(<Playlist>{
        'id': 6,
        'name': 'Piores Rock',
        'categories': [2],
        'musics': [2],
        'image':
            'https://assets.dragoart.com/images/140589_502/how-to-draw-strange-music-logo-strange-music-step-5_5e4cb46a6013c9.70891777_74088_5_3.gif',
        'link': '',
        'owner': 'geraldo',
        'followers': [],
        'availability': 'public'
    });

    var newUser = new User();
    newUser.id = 1;
    newUser.name = 'geraldo';
    newUser.email = 'email@email.com';
    newUser.password = '123456';
    newUser.playlists = [newPlaylist];

    beforeAll(() => {
        process.stdout.write("playlist-service: ");
    });

    beforeEach(() => {
        playlistService = new PlaylistService()
        timeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
    });

    afterAll(() => {
        console.log("\n");
    });

    function add(playlist: Playlist) : void {
        playlistService.addPlaylist(playlist);
    }

    function deletePlaylist(id: number) : void {
        playlistService.delete(id);
    }

    it("ter inicialmente 6 playlists cadastradas", () => {
        expect(playlistService.playlists.length).toEqual(6);
    });

    it("deve cadastrar uma nova playlist", () => {
        add(newPlaylist);

        expect(playlistService.playlists.length).toBe(7);
        expect(playlistService.playlists[6].id).toBe(6);
        expect(playlistService.playlists[6].name).toBe('Piores Rock');
        expect(playlistService.playlists[6].categories).toEqual([2]);

        deletePlaylist(6);
    });

    it("deve retornar as playlists de um usuário", () => {
        add(newPlaylist);

        let playlists = playlistService.getUserPlaylists(newUser.name);
        expect(playlists.length).toBe(1);
        expect(playlists[0].id).toBe(6);
        expect(playlists[0].name).toBe('Piores Rock');
        expect(playlists[0].categories).toEqual([2]);

        deletePlaylist(6);
    });

    it("deve verificar se o nome da playlist já existe", () => {
        let exists = playlistService.verificarNomePlaylistExistente('Melhores Rock');
        expect(exists).toBe(true);
    });

    it("deve retornar todas as playlists", () => {
        let playlists = playlistService.get();
        expect(playlists.length).toBe(6);
        for(let i = 0;i < playlists.length;i++) {
            expect(playlists[i].id).toBe(i);
        }
    });

    it("deve retornar uma playlist pelo id", () => {
        add(newPlaylist);

        let playlist = playlistService.getById(6);
        expect(playlist.id).toBe(6);
        expect(playlist.name).toBe('Piores Rock');
        expect(playlist.categories).toEqual([2]);

        deletePlaylist(6);
    });

    it("deve retornar undefined se a playlist não existir", () => {
        let playlist = playlistService.getById(6);
        expect(playlist).toBeUndefined();
    });

    it("deve atualizar uma playlist", () => {
        add(newPlaylist);

        let playlist = playlistService.getById(6);
        playlist.name = 'Rock';
        let updatedPlaylist = playlistService.update(playlist);
        expect(updatedPlaylist.id).toBe(6);
        expect(updatedPlaylist.name).toBe('Rock');
        expect(updatedPlaylist.categories).toEqual([2]);

        deletePlaylist(6);
    });

    it("deve deletar uma playlist", () => {
        add(newPlaylist);

        expect(playlistService.playlists.length).toBe(7);
        expect(playlistService.playlists[6].id).toBe(6);
        expect(playlistService.playlists[6].name).toBe('Piores Rock');
        expect(playlistService.playlists[6].categories).toEqual([2]);

        deletePlaylist(6);

        expect(playlistService.playlists.length).toBe(6);
    });

    it("deve adicionar uma categoria a uma playlist", () => {
        add(newPlaylist);
        let playlist = playlistService.addNewCategory(6, 3);
        expect(playlist.id).toBe(6);
        expect(playlist.name).toBe('Piores Rock');
        expect(playlist.categories).toEqual([2, 3]);
        playlist = playlistService.deleteCategory(6, 3);
        deletePlaylist(6);
    });

    it("deve deletar uma categoria de uma playlist", () => {
        add(newPlaylist);
        let playlist = playlistService.deleteCategory(6, 2);
        expect(playlist.id).toBe(6);
        expect(playlist.name).toBe('Piores Rock');
        expect(playlist.categories).toEqual([]);
        deletePlaylist(6);
    });

});
