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

export default async function firebaseApi(req: NextApiRequest, res: NextApiResponse) {
  const db = admin.database()
  const ref = db.ref('secret')
  const data = await ref.once('value')
  res.status(200).json({data});
}
