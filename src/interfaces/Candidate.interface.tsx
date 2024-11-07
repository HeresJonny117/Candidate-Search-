// TODO: Create an interface for the Candidate objects returned by the API
import { Candidate } from './path/to/Candidate';

export async function CandidateSearch(): Promise<Candidate> {
  const response = await fetch('searchGithubUser');
  const data = await response.json();

  return {
    name: data.name,
    username: data.login,
    location: data.location,
    avatar: data.avatar_url,
    email: data.email || null,
    html_url: data.html_url,
    company: data.company || null,
  };
}