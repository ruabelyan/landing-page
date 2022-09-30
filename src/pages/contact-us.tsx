import React from "react";

import { phoneCodes } from "assets";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/router";

import {
	ErrorMessage,
	FastField,
	FieldInputProps,
	FieldMetaProps,
	Form,
	Formik,
	FormikHelpers,
	FormikProps,
} from "formik";

import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import { object, string } from "yup";
import { useIntl } from "react-intl";
import parse from "html-react-parser";

import { getHtml, getText } from "shared/helpers";

import {
	Banner,
	BannerProps,
	Button,
	Footer,
	PageWrapper,
	PopUp,
	PopUpProps,
	ArrowToTop,
} from "components";

import {
	AnimateSymbol1Icon,
	AnimateSymbol2Icon,
	AnimateSymbol3Icon,
	AnimateSymbol5Icon,
} from "icons";

import GeolocationPhoneCode from "./geolocation-phone-code";
import pageBackground from "../img/contact-us-header.png";

const options = [
	{ label: "Casino Operator", value: "casino-operator" },
	{ label: "iGaming Affiliate", value: "igaming-affiliate" },
	{ label: "RGS Aggregator", value: "rgs-aggregator" },
	{ label: "Little Experience", value: "little-experience" },
	{ label: "New In The Field", value: "new-in-the-field" },
];

const optionsPhone = [
	{ label: "+374", value: "+374" },
	{ label: "+374 47", value: "+374 47" },
	{ label: "+374 97", value: "+374 97" },
];

const optionsPrefferedMessenger = [
	{ label: "Skype", value: "Skype" },
	{ label: "WhatsApp", value: "whatsapp" },
	{ label: "Telegram", value: "telegram" },
];

export interface FormValues {
	name: string;
	email: string;
	experience: string;
	phoneCode: string;
	phoneNumber: string;
	messenger: string;
	messengerId: string;
	message: string;
}

const ContactUs: NextPage = () => {
	const intl = useIntl();

	const bannerProps: BannerProps = {
		color: "yellow",
		title: getHtml("contacts.title"),
		description: getHtml("contacts.description"),
		buttonTitle: getHtml("contacts.buttonLabel"),
	};

	const [checked, setChecked] = useState<boolean>(false);
	const [recaptcha, setRecaptcha] = useState<boolean>(false);

	const initialValues: FormValues = {
		name: "",
		email: "",
		experience: "",
		phoneCode: "+374",
		phoneNumber: "",
		messenger: "",
		messengerId: "",
		message: "",
	};

	const contactUsRequestModelValidator = object({
		name: string()
			.required(getText("contacts.sys.requiredField"))
			.max(200, getText("contacts.sys.nameMaxLength200")),
		email: string()
			.required(getText("contacts.sys.requiredField"))
			.email(getText("contacts.sys.InvalidEmail"))
			.max(200, getText("contacts.sys.nameMaxLength200")),
		experience: string().required(getText("contacts.sys.requiredField")),
		phoneNumber: string().max(30, getText("contacts.sys.nameMaxLength30")),
		messenger: string(),
		messengerId: string().max(50, getText("contacts.sys.nameMaxLength50")),

		message: string()
			.required(getText("contacts.sys.requiredField"))
			.max(2000, getText("contacts.sys.nameMaxLength2000")),
	});

	const onRecaptha = (value: string) => {
		if (value) setRecaptcha(true);
	};

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const onFormSubmit = (
		values: FormValues,
		{ resetForm }: FormikHelpers<FormValues>
	) => {
		axios
			.post("/api/contact-us", {
				name: values.name,
				email: values.email,
				experience: values.experience,
				phoneNumber: values.phoneCode + values.phoneNumber,
				messenger: values.messenger,
				messengerId: values.messengerId,
				message: values.message,
			})
			.then((res) => {
				setIsSuccess(true);
				setIsOpen(true);
				setChecked(false);
			})
			.catch((err) => {
				setIsSuccess(false);
				setIsOpen(true);
				setChecked(false);
			});
		resetForm();
	};

	const { locale } = useRouter();

	const popUpPropsSuccess: Omit<
		PopUpProps,
		"onClose" | "isOpen" | "iconVariant"
	> = {
		title: getText("contacts.sys.popup.title"),
		subTitle: getText("contacts.sys.popup.subTitle"),
		paragraph: getText("contacts.sys.popup.paragraph"),
		buttonTitle: getText("contacts.sys.popup.buttonTitle"),
	};
	const popUpPropsError: Omit<PopUpProps, "onClose" | "isOpen" | "iconVariant"> =
	{
		title: getText("contacts.sys.popup.error.title"),
		subTitle: getText("contacts.sys.popup.error.subTitle"),
		paragraph: "",
		buttonTitle: getText("contacts.sys.popup.error.buttonTitle"),
	};
	return (
		<>
			<Head>
				<title>Atom Construct. B2B aggregator</title>
				<meta name="description" content="Atom Construct. B2B aggregator" />
				<meta name="keywords" content="Atom Construct. B2B aggregator" />

				<meta property="og:locale" content="en_EN" />
				<meta property="og:title" content="Atom Construct. B2B aggregator" />
				<meta property="og:description" content="Atom Construct. B2B aggregator" />

				<meta name="twitter:title" content="Atom Construct. B2B aggregator" />
				<meta name="twitter:description" content="Atom Construct. B2B aggregator" />

				<meta
					name="apple-mobile-web-app-title"
					content="Atom Construct. B2B aggregator"
				/>
				<meta name="application-name" content="Atom Construct. B2B aggregator" />
				<meta
					name="msapplication-tooltip"
					content="Atom Construct. B2B aggregator"
				/>
				<link rel="preload" href={pageBackground?.src} />
			</Head>

			<PageWrapper page="contacts" className={`${locale}`}>
				<ArrowToTop className="contacts" />
				<AnimateSymbol1Icon className="animate-symbol animate-symbol--1" />
				<AnimateSymbol2Icon className="animate-symbol animate-symbol--2" />
				<AnimateSymbol3Icon className="animate-symbol animate-symbol--3" />
				<AnimateSymbol5Icon className="animate-symbol animate-symbol--5" />
				<PopUp
					{...(isSuccess ? popUpPropsSuccess : popUpPropsError)}
					isOpen={isOpen}
					iconVariant={isSuccess ? "success" : "error"}
					onClose={() => setIsOpen(false)}
				/>
				<Head>
					<title>Atom Contact Us</title>
				</Head>
				<Banner {...bannerProps} showButton={false} />
				<section className="contact-us-section">
					<div className="fix-layout">
						<Formik
							initialValues={initialValues}
							onSubmit={onFormSubmit}
							validationSchema={contactUsRequestModelValidator}
						>
							{(formik) => {
								return (
									<Form noValidate>
										<GeolocationPhoneCode
											onPhoneCodeFound={(phoneCode) =>
												formik.setFieldValue("phoneCode", phoneCode)
											}
										/>

										<div className="fix-layout-contacts" id="get-in-touch">
											<div className="section-title-wrapper">
												<h2
													className={classNames("section-title", `section-title__yellow`)}
													id="contacts"
												>
													{getHtml("contacts.pageTitle")}
												</h2>
											</div>
											<section className="contact-form-section">
												{/* contact-row */}
												<div className="contact-row">
													<div
														className={classNames(
															{
																"contact-cell--filled": formik.values.name,
																"contact-cell contact-cell-custom danger-after":
																	formik.errors.name && formik.touched.name,
															},
															"contact-cell contact-cell-custom"
														)}
													>
														<label className="default-label" htmlFor="full-name">
															{getHtml("contacts.field.name.label")}
															<span
																className={`${formik.touched.name && formik.errors.name ? "danger" : ""
																	} text-decoration name-custom-left-size`}
															/>
														</label>
														<span className="input-underline" />
														<FastField
															name="name"
															type="text"
															id="full-name"
															autoComplete="on"
															className={classNames(
																{
																	"background-red ": formik.errors.name && formik.touched.name,
																},
																{
																	"default-input--fill": formik.values.name,
																},
																"default-input"
															)}
															placeholder={intl.formatMessage({
																id: "contacts.field.name.placeholder",
															})}
														/>
														{formik.touched.name && formik.errors.name && (
															<p className="error-message">
																<ErrorMessage name="name" component="p" />
															</p>
														)}
													</div>
													<div
														className={classNames(
															{
																"contact-cell--filled": formik.values.experience,
																"contact-cell contact-cell-custom danger-after":
																	formik.errors.experience && formik.touched.experience,
															},
															"contact-cell contact-cell-custom"
														)}
													>
														<label className="default-label" htmlFor="experience">
															{getHtml("contacts.field.experience.label")}
															<span
																className={`${formik.touched.experience && formik.errors.experience
																		? "danger"
																		: ""
																	} text-decoration describe-custom-left-size`}
															/>
														</label>
														<FastField name="experience">
															{({
																field,
																meta,
																form,
															}: {
																field: FieldInputProps<unknown>;
																meta: FieldMetaProps<unknown>;
																form: FormikProps<unknown>;
															}) => {
																return (
																	<>
																		<Select
																			name="experience"
																			options={options}
																			onChange={(e) => form.setFieldValue("experience", e?.label)}
																			onBlur={(e) => {
																				form.setFieldTouched("experience", true);
																			}}
																			value={options.find((o) => o.label === field.value) || null}
																			classNamePrefix={classNames(
																				{
																					"background-red":
																						formik.errors.experience && formik.touched.experience,
																				},
																				"react-select"
																			)}
																		/>
																		{formik.touched.experience && formik.errors.experience && (
																			<p className="error-message">
																				<ErrorMessage name="experience" component="p" />
																			</p>
																		)}
																	</>
																);
															}}
														</FastField>
													</div>
												</div>
												{/* contact-row */}

												{/* contact-row */}
												<div className="contact-row">
													<div
														className={classNames(
															{
																"contact-cell contact-cell-custom touched":
																	formik.touched.phoneNumber,
															},
															"contact-cell contact-cell-custom"
														)}
													>
														<label className="default-label" htmlFor="phone">
															{getHtml("contacts.field.phone.label")}
														</label>

														<div className="d-flex">
															<FastField name="phoneCode">
																{({
																	field,
																	meta,
																	form,
																}: {
																	field: FieldInputProps<any>;
																	meta: FieldMetaProps<any>;
																	form: FormikProps<any>;
																}) => (
																	<div className="select--phone-field-width">
																		<Select
																			options={phoneCodes}
																			onChange={(e) => {
																				form.setFieldValue("phoneCode", e?.label);
																			}}
																			value={phoneCodes.find((o) => o.label === field.value)}
																			classNamePrefix="react-select"
																		/>
																	</div>
																)}
															</FastField>
															<FastField name="phoneNumber">
																{({
																	field,
																	meta,
																	form,
																}: {
																	field: FieldInputProps<any>;
																	meta: FieldMetaProps<any>;
																	form: FormikProps<any>;
																}) => (
																	<input
																		value={field.value}
																		onChange={(e) => {
																			form.setFieldValue("phoneNumber", `${e.target.value}`);
																		}}
																		type="number"
																		id="phone"
																		className="default-input"
																		placeholder=""
																		onInput={(e: ChangeEvent<HTMLInputElement>) =>
																			(e.target.value = e.target.value.slice(0, 30))
																		}
																	/>
																)}
															</FastField>
															{formik.touched.phoneNumber && formik.errors.phoneNumber && (
																<p className="error-message">
																	<ErrorMessage name="phoneNumber" component="p" />
																</p>
															)}
														</div>
													</div>
													<div
														className={classNames(
															{
																"contact-cell--filled": formik.values.email,
																"contact-cell contact-cell-custom danger-after":
																	formik.errors.email && formik.touched.email,
															},
															"contact-cell contact-cell-custom"
														)}
													>
														<label className="default-label" htmlFor="email">
															{getHtml("contacts.field.email.label")}
															<span
																className={`${formik.touched.email && formik.errors.email ? "danger" : ""
																	} text-decoration email-custom-left-size`}
															/>
														</label>
														<FastField
															type="text"
															id="email"
															name="email"
															className={classNames(
																{
																	"background-red": formik.touched.email && formik.errors.email,
																},
																"default-input"
															)}
															placeholder={parse(
																intl.formatMessage({ id: "contacts.field.name.placeholder" })
															)}
														/>

														{formik.touched.email && formik.errors.email && (
															<p className="error-message">
																<ErrorMessage name="email" component="p" />
															</p>
														)}
													</div>
												</div>
												{/* contact-row */}

												{/* contact-row */}
												<div className="contact-row">
													<div className="contact-cell contact-cell-custom">
														<label className="default-label" htmlFor="preffered-messenger">
															{getHtml("contacts.field.prefferedMessenger.label")}
														</label>
														<FastField name="messenger">
															{({
																field,
																meta,
																form,
															}: {
																field: FieldInputProps<any>;
																meta: FieldMetaProps<any>;
																form: FormikProps<any>;
															}) => {
																return (
																	<>
																		<Select
																			options={optionsPrefferedMessenger}
																			onChange={(e) => {
																				form.setFieldValue("messenger", e?.label);
																			}}
																			onBlur={(e) => {
																				form.setFieldTouched("messenger", true);
																			}}
																			value={
																				optionsPrefferedMessenger.find(
																					(o) => o.label === field.value
																				) || null
																			}
																			classNamePrefix="react-select"
																		/>
																		{formik.touched.messenger && formik.errors.messenger && (
																			<p className="error-message">
																				<ErrorMessage name="messenger" component="p" />
																			</p>
																		)}
																	</>
																);
															}}
														</FastField>
													</div>
													<div
														className={
															formik.touched.messengerId
																? "contact-cell contact-cell-custom touched"
																: "contact-cell contact-cell-custom"
														}
													>
														<label className="default-label" htmlFor="messenger-id">
															{getHtml("contacts.field.messengerID.label")}
														</label>
														<FastField
															name="messengerId"
															type="text"
															id="messenger-id"
															className="default-input"
															placeholder={intl.formatMessage({
																id: "contacts.field.messengerID",
															})}
															maxLength={50}
														/>

														{formik.touched.messengerId && formik.errors.messengerId && (
															<p className="error-message">
																<ErrorMessage name="messengerId" component="p" />
															</p>
														)}
													</div>
												</div>
												{/* contact-row */}

												{/* contact-row */}
												<div
													className={classNames(
														{
															"contact-cell contact-cell-custom touched":
																formik.touched.message,
															"contact-cell contact-cell-custom danger-after":
																formik.errors.message && formik.touched.message,
														},
														"contact-cell contact-cell-custom contact-row--textarea"
													)}
												>
													<div className="contact-cell">
														<label className="default-label" htmlFor="your-message">
															{getHtml("contacts.field.yourMessage.label")}
															<span
																className={`${formik.touched.message && formik.errors.message ? "danger" : ""
																	} text-decoration your-custom-left-size`}
															/>
														</label>
														<FastField name="message">
															{({
																field,
																meta,
																form,
															}: {
																field: FieldInputProps<any>;
																meta: FieldMetaProps<any>;
																form: FormikProps<any>;
															}) => {
																return (
																	<>
																		<textarea
																			onChange={(e) => {
																				form.setFieldValue("message", e.target.value);
																			}}
																			onBlur={(e) => {
																				form.setFieldTouched("message", true);
																			}}
																			value={field.value}
																			className={classNames(
																				{
																					"background-red":
																						formik.errors.message && formik.touched.message,
																				},
																				"default-textarea"
																			)}
																			placeholder={intl.formatMessage({
																				id: "contacts.field.textarea.placeholder",
																			})}
																			name="message"
																		></textarea>
																		{formik.touched.message && formik.errors.message && (
																			<p className="error-message">
																				<ErrorMessage name="message" component="p" />
																			</p>
																		)}
																	</>
																);
															}}
														</FastField>
													</div>
												</div>
												{/* contact-row */}

												{/* contact-row */}
												<div className="contact-row">
													<div className="agree-row">
														<label className="container">
															<input
																type="checkbox"
																name="agree-checkbox"
																id="agree-checkbox"
																checked={checked}
																className="agree-checkbox"
																onChange={(e) => setChecked(e.target.checked)}
															/>
															<span className="checkmark"></span>
														</label>

														<label className="agree-row__label" htmlFor="agree-checkbox">
															{getHtml("contacts.field.agreeCheckbox.label")}
														</label>
													</div>
												</div>
												{/* contact-row */}

												{/* contact-row */}
												<div className="contact-row">
													<div className="contact-cell contact-cell--captcha">
														{/*//@ts-expect-error  */}
														<ReCAPTCHA
															sitekey="6LcNWakeAAAAABWHUfLY7f33_dORaI-6XtvHzY_8"
															onChange={onRecaptha}
															hl="en"
														/>
													</div>
													<div className="contact-cell contact-cell--btn">
														<Button
															component="button"
															type="submit"
															color={checked && recaptcha ? "yellow" : "disabled"}
															disabled={!checked || !recaptcha}
															variant="primary"
															className="default-btn--contact-button"
														>
															{getHtml("contacts.submit.btn")}
														</Button>
													</div>
												</div>
												{/* contact-row */}
											</section>
										</div>
									</Form>
								);
							}}
						</Formik>
					</div>
				</section>
				<Footer color={bannerProps.color} />
			</PageWrapper>
		</>
	);
};

export default ContactUs;
