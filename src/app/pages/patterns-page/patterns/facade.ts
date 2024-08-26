class Projector {
  on() {
    console.log('Projector is on.');
  }
  off() {
    console.log('Projector is off.');
  }
}

class SoundSystem {
  on() {
    console.log('Sound system is on.');
  }
  off() {
    console.log('Sound system is off.');
  }
}

class MediaPlayer {
  play(movie: string) {
    console.log(`Playing movie: ${movie}`);
  }
}

// Фасад
class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private mediaPlayer: MediaPlayer;

  constructor() {
    this.projector = new Projector();
    this.soundSystem = new SoundSystem();
    this.mediaPlayer = new MediaPlayer();
  }

  watchMovie(movie: string) {
    console.log('Get ready to watch a movie...');
    this.projector.on();
    this.soundSystem.on();
    this.mediaPlayer.play(movie);
  }

  endMovie() {
    console.log('Shutting down the home theater...');
    this.mediaPlayer.play('Stopping movie');
    this.soundSystem.off();
    this.projector.off();
  }
}

const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie('Inception');
homeTheater.endMovie();
