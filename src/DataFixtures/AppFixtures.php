<?php

namespace App\DataFixtures;


use App\Entity\Album;
use App\Entity\Artist;
use App\Entity\Genre;
use App\Entity\Label;
use App\Entity\Music;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        //Declaration of all genres
        $rap = new Genre();
        $rap->setLabel("Rap");
        $manager->persist($rap);

        $classic = new Genre();
        $classic->setLabel("Classic");
        $manager->persist($classic);

        //Declaration of all labels
        $atlanticRecording = new Label();
        $atlanticRecording->setLabel("2011 Atlantic Recording Corporation for the United States");
        $manager->persist($atlanticRecording);

        //Declaration of all artists
        $multiInterpretes = new Artist();
        $multiInterpretes->setName('Multi interpretes');
        $manager->persist($multiInterpretes);

        $snoopDog = new Artist();
        $snoopDog->setName('Snoop Dog');
        $manager->persist($snoopDog);

        $wizKhalifa = new Artist();
        $wizKhalifa->setName('Wiz Khalifa');
        $manager->persist($wizKhalifa);

        $juicyJ = new Artist();
        $juicyJ->setName('Juicy J');
        $manager->persist($juicyJ);

        $brunoMars = new Artist();
        $brunoMars->setName('Bruno Mars');
        $manager->persist($brunoMars);
        
        $currenSy = new Artist();
        $currenSy->setName('Curren$y');
        $manager->persist($currenSy);



        $mozart = new Artist();
        $mozart->setName('Wolfgang Amadeus Mozart');
        $manager->persist($mozart);
        
        $ciconia = new Artist();
        $ciconia->setName('Ensemble Johannes Ciconia');
        $manager->persist($ciconia);

        //Album Mac and Devin
        $macAndDevin = new Album();
        $macAndDevin->setName("Mac and Devin Go To High School");
        $macAndDevin->addArtist($multiInterpretes);

        //All music
        $smokinOn = new Music();
        $smokinOn->setName("Smokin' On(feat. Juicy J)");
        $smokinOn->addArtist($snoopDog);
        $smokinOn->addArtist($wizKhalifa);
        $smokinOn->addArtist($juicyJ);
        $smokinOn->setDuration(265);
        $smokinOn->setLabel($atlanticRecording);
        $smokinOn->addGenre($rap);
        $smokinOn->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($smokinOn);
        $manager->persist($smokinOn);

        $iGetLifted = new Music();
        $iGetLifted->setName("I Get Lifted");
        $iGetLifted->addArtist($snoopDog);
        $iGetLifted->addArtist($wizKhalifa);
        $iGetLifted->setDuration(292);
        $iGetLifted->setLabel($atlanticRecording);
        $iGetLifted->addGenre($rap);
        $iGetLifted->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($iGetLifted);
        $manager->persist($iGetLifted);

        $six30 = new Music();
        $six30->setName("6:30");
        $six30->addArtist($snoopDog);
        $six30->addArtist($wizKhalifa);
        $six30->setDuration(250);
        $six30->setLabel($atlanticRecording);
        $six30->addGenre($rap);
        $six30->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($six30);
        $manager->persist($six30);

        $talentShow = new Music();
        $talentShow->setName("Talent Show");
        $talentShow->addArtist($snoopDog);
        $talentShow->addArtist($wizKhalifa);
        $talentShow->setDuration(275);
        $talentShow->setLabel($atlanticRecording);
        $talentShow->addGenre($rap);
        $talentShow->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($talentShow);
        $manager->persist($talentShow);

        $youCanPutIt = new Music();
        $youCanPutIt->setName("You Can Put It in a Zag, I'mma Put It in a Blunt");
        $youCanPutIt->addArtist($snoopDog);
        $youCanPutIt->addArtist($wizKhalifa);
        $youCanPutIt->setDuration(275);
        $youCanPutIt->setLabel($atlanticRecording);
        $youCanPutIt->addGenre($rap);
        $youCanPutIt->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($youCanPutIt);
        $manager->persist($youCanPutIt);

        $og = new Music();
        $og->setName("OG (feat. Curren\$y");
        $og->addArtist($snoopDog);
        $og->addArtist($wizKhalifa);
        $og->addArtist($currenSy);
        $og->setDuration(298);
        $og->setLabel($atlanticRecording);
        $og->addGenre($rap);
        $og->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($og);
        $manager->persist($og);

        $letsGoStudy = new Music();
        $letsGoStudy->setName("Let's Go Study");
        $letsGoStudy->addArtist($snoopDog);
        $letsGoStudy->addArtist($wizKhalifa);
        $letsGoStudy->setDuration(245);
        $letsGoStudy->setLabel($atlanticRecording);
        $letsGoStudy->addGenre($rap);
        $letsGoStudy->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($letsGoStudy);
        $manager->persist($letsGoStudy);

        $frenchInhale = new Music();
        $frenchInhale->setName("French Inhale (feat. Mike Posner)");
        $frenchInhale->addArtist($snoopDog);
        $frenchInhale->addArtist($wizKhalifa);
        $frenchInhale->setDuration(159);
        $frenchInhale->setLabel($atlanticRecording);
        $frenchInhale->addGenre($rap);
        $frenchInhale->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($frenchInhale);
        $manager->persist($frenchInhale);

        $worldClass = new Music();
        $worldClass->setName("World Class");
        $worldClass->addArtist($snoopDog);
        $worldClass->addArtist($wizKhalifa);
        $worldClass->setDuration(210);
        $worldClass->setLabel($atlanticRecording);
        $worldClass->addGenre($rap);
        $worldClass->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($worldClass);
        $manager->persist($worldClass);

        $thatGood = new Music();
        $thatGood->setName("That Good");
        $thatGood->addArtist($snoopDog);
        $thatGood->addArtist($wizKhalifa);
        $thatGood->setDuration(228);
        $thatGood->setLabel($atlanticRecording);
        $thatGood->addGenre($rap);
        $thatGood->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($thatGood);
        $manager->persist($thatGood);

        $itCouldBeEasy = new Music();
        $itCouldBeEasy->setName("It Could Be Easy");
        $itCouldBeEasy->addArtist($snoopDog);
        $itCouldBeEasy->addArtist($wizKhalifa);
        $itCouldBeEasy->setDuration(228);
        $itCouldBeEasy->setLabel($atlanticRecording);
        $itCouldBeEasy->addGenre($rap);
        $itCouldBeEasy->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($itCouldBeEasy);
        $manager->persist($itCouldBeEasy);

        $youndWildAndFree = new Music();
        $youndWildAndFree->setName("Yound Wild & Free (feat. Bruno Mars)");
        $youndWildAndFree->addArtist($snoopDog);
        $youndWildAndFree->addArtist($wizKhalifa);
        $youndWildAndFree->setDuration(207);
        $youndWildAndFree->setLabel($atlanticRecording);
        $youndWildAndFree->addGenre($rap);
        $youndWildAndFree->setImage("https://i.scdn.co/image/ab67616d0000b273c303b2aec2d884a775045391");
        $macAndDevin->addMusic($youndWildAndFree);
        $manager->persist($youndWildAndFree);
        
        $macAndDevin->setReleaseYear(2011);
        $manager->persist($macAndDevin);
        
        //Album Mac and Devin
        $disambiguation = new Album();
        $disambiguation->setName("Disambiguation");
        $disambiguation->addArtist($mozart);
        $disambiguation->addArtist($ciconia);

        //All music
        $k1 = new Music();
        $k1->setName("Ouverture in E-Flat Major, K. 620: 1. Ouverture");
        $k1->addArtist($mozart);
        $k1->addArtist($ciconia);
        $k1->setDuration(451);
        $k1->addGenre($classic);
        $k1->setImage("https://i.scdn.co/image/e2a30576fc662186bcdd041cff7d848e77c11aac");
        $disambiguation->addMusic($k1);
        $manager->persist($k1);

        $k2 = new Music();
        $k2->setName("Introduction in E-Flat Major, K. 620: 2. Zu Hilfe! Zu Hilfe!");
        $k2->addArtist($mozart);
        $k2->addArtist($ciconia);
        $k2->setDuration(563);
        $k2->addGenre($classic);
        $k2->setImage("https://i.scdn.co/image/e2a30576fc662186bcdd041cff7d848e77c11aac");
        $disambiguation->addMusic($k2);
        $manager->persist($k2);
        
        $disambiguation->setReleaseYear(2019);
        $manager->persist($disambiguation);
        $manager->flush();
    }
}
