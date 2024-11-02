import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'

export const config = {
	api: {
		bodyParser: false // Disallow body parsing, consume as stream
	}
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const form = formidable()

		form.parse(req, (err, fields, files) => {
			if (err) {
				console.error('Error parsing form:', err)
				res.status(500).json({ error: 'Error parsing form data' })
				return
			}

			// Access form fields
			console.log('Fields:', fields)

			// Process the form data (e.g., send email, save to database)

			res.status(200).json({ status: 'Form submission received' })
		})
	} else {
		// Handle any other HTTP methods
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
