import { MongoClient } from 'mongodb'

const uri = 'mongodb+srv://hellodevsofficial:kbera321@feedbacks.qp1oszn.mongodb.net/'

export async function POST(request) {
  try {
    const formData = await request.formData()

    const name = formData.get('name')
    const email = formData.get('email')
    const feedback = formData.get('feedback')

    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db('feedback')
    const collection = db.collection('feedback')

    const result = await collection.insertOne({ name, email, feedback })

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('🔥 MongoDB insert error:', err)
    return new Response(JSON.stringify({ success: false, error: 'Failed to save feedback' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
