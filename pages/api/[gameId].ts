// import { NextApiRequest, NextApiResponse } from 'next';
// import admin from '../../firebase/server'

// export default async function firebaseApi(req: NextApiRequest, res: NextApiResponse) {
//   const db = admin.firestore()
//   const profileCollection = db.collection('profile')
//   const profiles = profileCollection.get()
// //   const profileDoc = await profileCollection.doc('rykeller').get()
//   res.status(200).json({profiles});
// }
import { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../firebase/server'
import { IDatabase, IGame } from '../../types';

const initialGameState: IGame = {
  config: {
    rounds: 5
  },
  rounds: [],
  teams: {}
}

const dateId = (dateString: Date | string = new Date()) => {
  return new Date(dateString).toLocaleDateString().replaceAll('/', '-')
}

export default async function firebaseApi(req: NextApiRequest, res: NextApiResponse) {
  console.warn
  const db = admin.database()
  const dateString = dateId('9/25/2022')
  const ref = db.ref(`games`)
  // const ref = db.ref(`games/${dateString}`)
  let game = await ref.once('value')
  if (!game) {
    await ref.set(initialGameState)
    console.warn('SET STATE')
    res.status(201).json({ game: initialGameState});
  }
  res.status(200).json({game});
}
