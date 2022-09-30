import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { object, SchemaOf, string } from "yup";

export const contactUsRequestModelValidator: SchemaOf<ContactUsRequestModel> =
	object({
		name: string().required().max(200, "The maximum length of name is 200"),
		email: string()
			.required()
			.email("Invalid email")
			.max(200, "The maximum length of name is 200"),
		experience: string().required(),
		phoneNumber: string().max(35, "The maximum length of phoneNumber is 35"),
		messenger: string(),
		messengerId: string(),
		message: string()
			.required()
			.max(2000, "The maximum length of message is 1000"),
	});

export interface ContactUsRequestModel {
	name: string;
	email: string;
	experience: string;
	phoneNumber?: string;
	messenger?: string;
	messengerId?: string;
	message: string;
}

const contactUsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const requestModel: ContactUsRequestModel = req.body;

		contactUsRequestModelValidator.validateSync(requestModel);

		const EMAIL_USER = "atomconstructcorp@gmail.com";
		const EMAIL_PASS = "egpnxreovztjgaby";
		const RECEIVER_EMAIL = "sales@atomconstruct.com";

		const transporter = nodemailer.createTransport({
			// host:
			// 	process.env.NODE_ENV === "production" ? "smtp.yandex.ru" : "smtp.gmail.com",
			// port: process.env.NODE_ENV === "production" ? 25 : 587,
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `<${EMAIL_USER}>`,
			to: RECEIVER_EMAIL,
			subject: "New request!",
			text: `You have a new request from ${requestModel.email}`,
			html: `
            <p data-renderer-start-pos="89">
                <strong data-renderer-mark="true">Name: </strong> <em data-renderer-mark="true">${
																	requestModel.name
																}</em><br>
                <strong data-renderer-mark="true">Email: </strong> <em data-renderer-mark="true">${
																	requestModel.email
																}</em><br>
                <strong data-renderer-mark="true">Experience: </strong> <em data-renderer-mark="true">${
																	requestModel.experience
																}</em><br>
                <strong data-renderer-mark="true">Phone Number: </strong> <em data-renderer-mark="true">${
																	requestModel.phoneNumber
																}</em><br>
                <strong data-renderer-mark="true">Messenger: </strong> <em data-renderer-mark="true">${
																	requestModel.messenger || "----"
																}</em><br>
                <strong data-renderer-mark="true">Messenger ID: </strong> <em data-renderer-mark="true">${
																	requestModel.messengerId || "----"
																}</em><br>
                <strong data-renderer-mark="true">Message: </strong> <em data-renderer-mark="true">${
																	requestModel.message
																}</em><br>
            </p>
            `,
		});

		res.status(200).json({ success: true, data: requestModel });
	} catch (error) {
		const typedError = error as { errors?: string[] };
		if (typedError.errors)
			return res.status(400).json({ success: false, errors: typedError.errors });

		res.status(500).json({ success: false, error: typedError });
	}
};

export default contactUsHandler;
