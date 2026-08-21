---
title: Helping commuters find quality companions
summary: A platform connecting public-transit commuters with each other, to make a long daily journey less lonely and safer than travelling alone.
year: 2024
role: Competitor analysis, user research, journey mapping, UI sketches and style tile — on a team of five
tags: ["UX research", "Service design", "Journey mapping", "Prototyping"]
cover: ../../assets/projects/commuters-final-screens.png
coverAlt: Five screens from the final design — a route map, destination entry, nearby commuters shown as faces on the map, a companion profile, and a first message
order: 6
featured: false
links:
  - label: "Full case study on Notion"
    href: "https://chipped-carpet-f30.notion.site/Helping-Commuters-Find-Quality-Companions-1568912eb0b580058fc5d5b8029d5383"
context: INF1602 Fundamentals of User Experience, Faculty of Information, University of Toronto (Professor Velian Pandeliev). Team "Travel Buddies" with Krishna Rana, Qiao Li, Ruisi Bi and Yiwen Zhang.
---

## The problem

How do you help people who commute long distances to work or school feel less isolated,
and address the safety concerns of travelling alone?

This started close to home: most of the team took public transit to campus, and the
journey was boring, tedious and meaningless. We wanted to fix our own commute.

## The pivot

My initial research direction was carpooling. That research is what killed it — I found
a crowded field of dedicated carpooling platforms the team had not known existed, which
undermined our whole premise.

I led the discussion on changing direction and proposed focusing on public-transit
commuters instead, a far less explored category. The team agreed, and that pivot defined
the rest of the project.

## Competitor analysis

I identified one direct competitor, SmartCommute.ca, and two indirect ones, Uber and
Facebook Communities. I then tested SmartCommute myself and found four concrete
failures: no built-in messaging, too much planning required up front, difficult
navigation, and excessive setup before any value appeared. Each became something our
design had to avoid.

![The SmartCommute.ca interface: a dense sidebar of travel modes beside a route map, with a scrolling list of potential partners.](../../assets/projects/commuters-smartcommute.png)

SmartCommute mid-task, with names and addresses blurred. The problem is legible in the
layout alone — six competing navigation targets, a form to complete before anything
happens, and still no way to message the person you matched with.

## User research

I interviewed two participants matching our target demographic of frequent transit
commuters, and analysed five of the team's ten interviews. We reduced the scripts to
keywords and sorted those into affinity diagrams, using frequency to find the pain
points that actually recurred rather than the ones that were merely vivid.

![An affinity diagram: several hundred colour-coded sticky notes sorted into labelled clusters across two boards.](../../assets/projects/commuters-affinity.png)

Ten interviews reduced to keywords, then clustered. What decided our priorities was how
often something came up, not how memorably it was said.

## Journey mapping

From the interview findings I built an AS-IS map of the experience as it already existed.

![As-Is user journey map covering three stages — commuting without a companion, searching for a companion, meeting someone new — across doing, thinking and feeling rows.](../../assets/projects/commuters-journey-as-is.png)

The feeling row is the one that mattered: bored and deprived, then frustrated and tired,
then unorganised and unsafe. Three stages, and not one good moment in any of them.

## Sketches, flow, storyboard

I sketched the route-setup task, drew it as a flow, then combined the two into a
storyboard so the team could review screens and logic together.

![Six hand-drawn phone screens showing a map, a search field, a route being entered, and a no-route-available state.](../../assets/projects/commuters-sketches.png)

Sketches for route setup, including the failure case.

![Flow diagram for route setup, with a decision node for whether a route can be planned and a loop back to re-enter addresses.](../../assets/projects/commuters-flow.png)

Drawing the same task as a flow is what surfaced the unplannable-route branch, which the
sketches alone had skipped.

![Storyboard combining the sketches and the flow into a four-panel sequence, each screen annotated with the action that leads to the next.](../../assets/projects/commuters-storyboard.png)

The two combined into one artefact.

## Prioritisation

The team pooled every design idea we had generated and sorted them by implementation
effort against impact on the experience, so the trade-offs were explicit before anyone
started building.

![Prioritisation matrix with design ideas on sticky notes plotted between low and high effort, and low and high impact.](../../assets/projects/commuters-prioritisation.png)

Ideas plotted rather than argued about. The cheap, high-impact quadrant set the scope of
the prototype.

## Wireframes and testing

The team built low-fidelity wireframes and a clickable prototype collaboratively, then
tested it with students in the practicum. I ran one session, taking notes as the
participant moved through the prototype and asking follow-ups — *was there anything you
found confusing*, *what do you think this prototype is for*.

![Low-fidelity wireframes: a grid of grey-box phone screens covering onboarding, matching, a map view and a post-trip questionnaire.](../../assets/projects/commuters-wireframes.png)

Deliberately unstyled, so testing produced feedback about the flow rather than about the
colours.

## Visual direction

The team assembled a mood board around vibrant, bright colour — we wanted the product to
feel engaging and friendly rather than utilitarian. I then designed the style tile from
it, choosing orange and light blue: two contrasting colours that complement rather than
compete, on a white ground with black type. The team adopted my style tile for the final
design.

![Style tile showing a header bar, type scale, body copy, three button styles and a five-colour palette.](../../assets/projects/commuters-style-tile.png)

Light blue `#70ABFF`, light orange `#FFB224` and a light brown `#AD7D49` for warmth,
against white and black.

![A refined UI mock-up: a map screen with commuters shown as faces, a companion profile card, and the style tile applied.](../../assets/projects/commuters-mockup.png)

My own high-fidelity mock-up, built from a modified version of the style tile.

## The final design

The team brought our individual mock-ups together and worked the final version
collaboratively. The flow runs from planning a route, to finding someone travelling the
same way, to a profile, to a conversation — and ends somewhere most matching products
never go, at actually meeting up.

![Three final screens: a chat thread agreeing a meeting time, a location-permission dialog, and a map showing the walk to a meetup point with a We Met button.](../../assets/projects/commuters-final-flow-b.png)

The end of the journey. Location sharing is asked for at the moment it becomes useful,
not at sign-up, and confirming you met is what closes the loop.

![To-Be user journey map across the same three stages, with the feeling row now reading happy and at ease, efficient and effortless, content.](../../assets/projects/commuters-journey-to-be.png)

The AS-IS map again, redrawn against the finished design. Putting them side by side is
the clearest statement of what the project was for.

## What I learned

Flexibility mattered more than commitment. Pivoting from a generic ride-sharing concept
to a niche one was the single decision that made the project work.

The interviews were harder than expected — early responses were shallow, and the fix was
better follow-up questions rather than more participants. That skill transferred to
everything since.

The limits are worth stating plainly. Matching would get harder to scale, not easier,
as the user base grows; trust is difficult to establish in interactions this brief, even
with verification; and the biggest barrier is habit, because people are reluctant to
change a routine that already works.
