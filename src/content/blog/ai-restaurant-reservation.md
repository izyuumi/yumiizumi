---
title: "I Asked My AI to Get Me a Restaurant Reservation"
description: There's a yakitori spot in Kyoto that's nearly impossible to book. Their slots open unpredictably and vanish fast. So I built a bot to watch for me.
pubDate: 2026-02-25
tags: [ai, automation, openclaw, playwright, python, kyoto]
---

There's a yakitori restaurant in Kyoto I really like. Slots open when someone else cancels. No schedule, no predictable window. They just appear, and then they're gone.

I wanted a table for that night. The site had nothing. You can't plan around a cancellation. You just have to be watching.

Refreshing a page every few minutes for days wasn't something I was going to do. So I didn't.

## What I Built

I told my AI agent to watch the reservation page every ten minutes and book automatically if a slot opened. Five minutes of conversation. No code written by me.

The agent wrote a Playwright script in Python. It loads the page, checks if the target slot is selectable, fills in my details, and submits. If anything goes wrong, it emails me instead. A launchd job runs it every ten minutes in the background.

## What Happened

The script ran through the night and into the next day. Over a hundred checks. Every time: nothing.

At 1:42 PM, the slot opened.

It found it, filled in the form, and then failed. It couldn't locate the submit button. Instead of giving up silently, it emailed me: "Slot OPEN but reservation failed, act fast."

I opened the site and finished the booking myself. Under a minute.

## The Interesting Part

The bot got to the door. I turned the handle.

That's not a failure. The tedious part was fully handled. The part that needed real-time judgment got escalated to me at exactly the right moment. If I had been doing this manually, I would have given up after a dozen checks.

## The Upshot

Five minutes of conversation. The bot cost nothing. I got the table.

That's vibe coding applied to actual life. A restaurant, a bot, an email alert, a human to close the last step. All from one short message.

Kyoto is full of places like this. I have an agent now. It can wait.
