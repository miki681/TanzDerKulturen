
export default function TeamMember({ name, role, image, bio }) {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{bio}</p>
    </div>
  );
}