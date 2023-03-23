import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userName = signUpUser(firstName, lastName);
  const image = uploadPhoto(fileName);

  const profile = await Promise.allSettled([userName, image])
    .then((response) => response.map((response) => {
      if (response.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: response.reason.toString(),
        };
      }
      return response;
    }));
  return Promise.resolve(profile);
}
