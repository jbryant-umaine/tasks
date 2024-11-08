import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🎅" | "🎆" | "❤️" | "🦃";

const HOLIDAY_ALPHABETICAL_TRANSITION: Record<Holiday, Holiday> = {
    "🎅": "🎃", // Christmas to Halloween
    "🎃": "🎆", // Halloween to New Year
    "🎆": "🦃", // New Year to Thanksgiving
    "🦃": "❤️", // Thanksgiving to Valentine's Day
    "❤️": "🎅", // Valentine's Day to Christmas
};

const HOLIDAY_YEAR_TRANSITION: Record<Holiday, Holiday> = {
    "❤️": "🎃", // Valentine's Day to Halloween
    "🎃": "🦃", // Halloween to Thanksgiving
    "🦃": "🎅", // Thanksgiving to Christmas
    "🎅": "🎆", // Christmas to New Year
    "🎆": "❤️", // New Year back to Valentine's Day
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎅");

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button
                onClick={() => {
                    setHoliday(HOLIDAY_ALPHABETICAL_TRANSITION[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(HOLIDAY_YEAR_TRANSITION[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
