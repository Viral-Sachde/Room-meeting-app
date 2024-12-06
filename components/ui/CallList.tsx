"use client"
import { useGetCalls } from '@/hooks/useGetCalls';
import { CallRecording } from '@stream-io/node-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import MeetingCard from './MeetingCard';
import { Call } from '@stream-io/video-react-sdk';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {

    const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls();
    const router = useRouter();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);

    const getCalls = () => {
        switch (type) {
            case 'ended':
                return endedCalls;


            case 'recordings':
                return recordings;


            case 'upcoming':
                return upcomingCalls;

            default:
                [];
        }
    }

    const getNoCallsMessage = () => {
        switch (type) {
            case 'ended':
                return 'No Previous Calls';
            case 'recordings':
                return 'No Recordins';
            case 'upcoming':
                return 'No Upcoming Calls';
            default:
                return '';;
        }
    }

    const calls = getCalls();
    const noCallsMessage = getNoCallsMessage();

    return (
        <div className='grid grid-col-1 gap-5 xl:grid-col-2'>
            {calls && calls.length > 0 ? calls.map((meeting: Call | CallRecording) => (<MeetingCard key={(meeting as Call).id}
                icon={type === 'ended' ? '/icons/previous.svg' : type === 'upcoming' ? 'icons/upcomings.svg' : '/icons/recordings.svg'}
                title={meeting.state.custom.description.substring(0, 20) || 'No Description'}
                date=''
                isPreviousMeeting=''
                buttonIcon1=''
                handleClick=''
                link=''
                buttonText='' />)) : (
                <h1>{noCallsMessage}</h1>
            )}

        </div>
    )
}

export default CallList