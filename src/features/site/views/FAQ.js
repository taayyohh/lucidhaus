import {chevronCircleDown, chevronCircleUp} from 'config/icons'
import React, {useState}                    from 'react'
import Div                                  from 'shared/Basic/Div'
import H1                                   from 'shared/Basic/H1'
import Icon                                 from 'shared/Basic/Icon'
import LinkSwitch                           from 'shared/Basic/LinkSwitch'
import MotionDiv                            from 'shared/Basic/MotionDiv'
import ContentWrapper                       from 'shared/Layout/ContentWrapper'
import {aboutPageStyle, faqStyle}           from './styles'

const FAQ = () => {
    const Question = ({q, a}) => {
        const [isOpen, setIsOpen] = useState(false)
        const variants = {
            initial: {
                height: 0,
                overflow: 'hidden'
            },
            animate: {
                height: 'auto'
            }
        }

        return (
            <Div>
                <Div
                    onClick={() => setIsOpen(flag => !flag)}
                    theme={faqStyle.question}
                >
                    {q}
                    <Icon
                        icon={isOpen ? chevronCircleUp : chevronCircleDown}
                        theme={faqStyle.icon}
                    />
                </Div>
                <MotionDiv
                    initial={'initial'}
                    animate={isOpen ? 'animate' : 'initial'}
                    variants={variants}
                >
                    <Div theme={faqStyle.answer}>
                        {a}
                    </Div>
                </MotionDiv>
            </Div>
        )
    }

    const Email = () => {
        return (
            <Div>
                We’d love to hear from you! Please send an email to <a
                href={'mailto:hello@inclusiveguide.com'}>hello@inclusiveguide.com</a>.
                For a faster response, please try using a short yet descriptive subject line, such as “I have feedback
                on the website” or “I’d like to add my business”.
            </Div>
        )
    }
    const Error = () => {
        return (
            <Div>
                Whoops! Looks like we’re not perfect either. Please submit any errors using this <LinkSwitch
                url={'https://docs.google.com/forms/d/1jVOQmYLDvdTEiGICDmZY9wmSmKirNo1oYNZxO-UjylE/edit?ts=60c78b0f'}>google
                form</LinkSwitch>,
                which our web team regularly monitors. While we do our best to fix reported issues right away,
                sometimes it can take awhile to have our updates go live.
                Please be patient and fill out the google form only one time per issue.
            </Div>
        )
    }
    const Identity = () => {
        return (
            <Div>
                Co-Founders Crystal & Parker also have their personal identity information on this website,
                and would never treat your information any differently from their own.
                As Black women, we understand the historical and contemporary misuse of
                information for all people, but especially people of color. We’re not used to being treated as full
                human
                beings in the real world, so why should it be any different in the digital one? While we aren’t perfect,
                here’s what we can promise about our intent: <strong>Your information will NEVER be sold
                individually</strong>.
                If you self-identify as multi-racial Black woman who is 37 years old (like Crystal),
                that information will turn into something like this: “46% of the women of color who reported a negative
                experience
                in your store were over 35 years of age”. That’s the closest we’ll come to identifying you! We will be
                selling reports to businesses with phrases like that, but that’s about it.
                Our hope is to some day collect enough data on a national-scale to be able to enter policy discussions
                at the highest level, but again, we will never be specific enough to have the ability to identify you as
                an individual.
                And again, what happens to your data will happen to ours, so while we aren’t perfect, we will be
                adhering to the strictest data privacy policies and standards available.
                <em>We encourage you to screenshot this paragraph and hold us accountable to it!</em>
            </Div>
        )
    }
    const questions = [
        {
            q: "How can I contact Inclusive Guide?",
            a: <Email/>
        },
        {
            q: "How can I report an error on the site?",
            a: <Error/>
        },
        {
            q: "How is my identity information used?",
            a: <Identity/>
        },
        {
            q: "How do I update my business page to tell customers about what we offer?",
            a: "We would love for you to keep your business page up to date! " +
                "We are currently working on building out our back-end access for business owners " +
                "and managers to log in to our site, claim their business, and have full control over your own listing. " +
                "This will allow you to update your description, change your hours of operation, respond to reviews " +
                "given on this site, upload your own photo, and more. " +
                "For now, we invite you to fill out this google form any time you have a business " +
                "listing update, and our small-but-mighty web admin team will work to get your business " +
                "listing updated as soon as possible. We thank you in advance for your patience!"
        },
        {
            q: "My business received a negative review, what are my next steps?",
            a: "Congratulations! You’ve joined us in being imperfect! We know this can be scary for you, " +
                "especially since you’re probably on this site because you have really good intentions. " +
                "Take a deep breath… and let’s get to work. Once we open up the business side of the platform, " +
                "you’ll be able to create an account to respond to these reviews. We’ll have tips available for how to respond," +
                " both from a general online customer service perspective and more specifically when an issue such as race is involved. " +
                "It’s going to be okay, we promise! This site is not intended to cancel businesses or encourage folx to avoid your location. " +
                "On the contrary, we’d like to see what work you are putting in to solve problems that are inevitably going to arise, " +
                "because, like we said before, nobody is perfect. And no, we’re not going to delete negative posts. " +
                "What we can offer instead is to try and help address your problem. Most users on here are simply trying to point out an " +
                "experience they had, and there are going to be negative ones! But what are you going to do about it now that you know? " +
                "That’s what really matters. So we encourage you to breathe, believe, and be better. That’s what Inclusive Guide is all about. "
        },
        {
            q: "Can I report another user or review on the site?",
            a: "Absolutely. However, it’s not going to be like on other sites. " +
                "You might be surprised at the number of issues people are reporting, " +
                "and some of these reports may be triggering or use strong language. " +
                "If someone called a customer the ‘N-Word’ and the customer reported the exact " +
                "language used, we need to know that. If you need to flag or report a post, " +
                "you can click the [icon] button at the bottom of each review. This will blur the review for you, " +
                "without removing it from our site. Our web admins will be able to see that a post was flagged and " +
                "the post will either be uncensored, remain censored with an explanation, or be deleted with a brief " +
                "explanation. These decisions will be made at the sole discretion of Inclusive Guide review admins and moderators."
        },
        {
            q: "Can a business delete my review?",
            a: "Nope! But we can. While your review can be flagged by another user or a business, we will not remove any reviews that appear authentic, " +
                "no matter the content. To avoid suspicion of trolling, please keep in mind that while we would love for you to include as many factual details " +
                "as possible, adding colorful descriptive language to your experience will have no impact on the score. The inclusivity score will only be impacted " +
                "by the sliding scale responses, and the algorithm will not pick up on anything you write in the text box. The text box is only to give context to other " +
                "users, and as such, we encourage you to write out what happened as clearly and succinctly as possible. " +
                "This will help us clear any ‘flagged’ reviews as quickly as possible. An individual user can flag your review. " +
                "This will blur the review for you, without removing it from our site. Our web admins will be able to see that" +
                " a post was flagged and the post will either be uncensored, remain censored with an explanation, or be deleted with a brief explanation." +
                " These decisions will be made at the sole discretion of Inclusive Guide review admins and moderators. While a business can not perform " +
                "this action on their own page, there is not currently anything stopping a staff member or employee from creating their own user profile " +
                "and flagging negative posts on their place of business. We are working on features to prevent this from happening."
        },
        {
            q: "Is my information being sold to advertisers?",
            a: "Nope! Our information is in there amongst yours, so we will be treating your information as our own. " +
                "This platform is intended to remain free to use for all individuals users, and we will admittedly be collecting " +
                "a LOT of data on you, but it will all be data that you willingly and knowingly provide by filling out your identity profile. " +
                "The more information you give, the more detailed we can be in identifying patterns of discrimination to businesses you review. "
        }

    ]

    return (
        <ContentWrapper theme={aboutPageStyle}>
            <Div>
                <H1 theme={aboutPageStyle.heading}>Frequently Asked Questions</H1>
                <Div theme={faqStyle}>
                    {questions.map((question) => (
                        <Question
                            q={question.q}
                            a={question.a}
                        />
                    ))}
                </Div>
            </Div>
        </ContentWrapper>
    )
}

export default FAQ
