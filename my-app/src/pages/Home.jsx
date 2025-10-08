import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
import member1 from "../assets/member1.jpg";
import member5 from "../assets/member5.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member2 from "../assets/member2.jpg";
import member6 from "../assets/member6.jpg";
import teamImg from "../assets/team.jpg";

export default function Home() {
  const team = [
    {
      name: "Irene Appiah",
      role: "Official Patron of Tanz der Kulturen",
      image: member1,
      bio: "Irene Appiah, lawyer and Hamburg politician, is a passionate supporter of contemporary African dance and a champion of cultural diversity, intercultural understanding, and women’s empowerment. Her engagement with the Black community and occasional live appearances enrich our performances and strengthen our mission to celebrate the unifying power of dance with African live music. We are proud to have her as our patron.",
    },
    {
      name: "Stephanie Bangoura",
      role: "Director",
      image: member5,
      bio: "I am deeply grateful to all those who came before me and from whom I have had the privilege to learn: Luisa Francia, Susanne Wenger, Monika Ahoulou, Letieres Leite, Khadim Badji, Joe Coli, and others.I am aware that not everyone has the same opportunities to continue learning and to share their work. May I, together with Ritual Dance Pedagogy, contribute to creating a more harmonious and inclusive world.",
    },
    {
      name: "Letieres Leite",
      role: "Mentor in Ritual Dance Education",
      image: member3,
      bio: "Letieres Leite (1960–2022) was a world-renowned Brazilian composer, arranger, and performer, deeply rooted in Afro-Brazilian Candomblé traditions. He founded the innovative orchestra Rumpilezz, blending Afro-Bahian percussion with jazz, and collaborated with international artists including Gilberto Gil and Maria Bethânia. As a mentor and educator, he guided Tanz der Kulturen and founded Instituto Rumpilezz, supporting young musicians and social projects in Bahia.",
    },
    {
      name: "Temmie Ovwasa",
      role: "Artist",
      image: member4,
      bio: "Multidisciplinary artist, singer, songwriter, poet, producer, and queer activist.Her work reflects the challenges and strengths of marginalized communities in Nigeria, emphasizing the importance of creating space for women, queer, and differently-identifying individuals. Temmie released Nigeria’s first openly queer album and collaborates closely with Stephanie Bangoura, Ritual Dance Pedagogy, and SnakeAwake, exploring her Yoruba roots through performance and art.",
    },
    {
      name: "Massa Dembélé",
      role: "Music",
      image: member2,
      bio: "Ca multi-instrumentalist and singer.As a Griot, Massa learned the balafon, ngoni, and djembe from his family from a young age, and later from djembe master Adama Dramé. He sings in Mandinka, Babwa, Diola, French, and German, performing both his own compositions and traditional West African music. With Massa, the dancers are addressed directly and personally:`I love music when I can share it and when it moves other people. We need music to feel, to give space to our sensitive emotions.`",
    },
    {
      name: "Maïmouna Jallow",
      role: "Artistic Director – SnakeAwake",
      image: member6,
      bio: "Maïmouna is a multidisciplinary artist, filmmaker, author, and educator. She directed the award-winning experimental film Tales of the Accidental City and published books including I’m the Colour of Honey and the anthology Story Story, Story Come. She has led international projects, collaborated with BBC World Service, Oxfam, and Médecins Sans Frontières, and runs storytelling and communication workshops. Since 2023, she has been developing SnakeAwake with Stephanie Bangoura, a ritual performance blending storytelling, performance, and interdisciplinary collaboration.",
    },
  ];

  return (
    <div>
      <Header />
      <section
        className="hero"
        style={{
          backgroundImage: `url(${teamImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 13%",
          width: "100%",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <div className="hero-text">
          <h2>Meet Our Team</h2>
          <p>Discover the people behind Tanz der Kulturen Berlin</p>
        </div>
      </section>

      <section id="team" className="team-section">
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
