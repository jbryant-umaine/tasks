import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🎅" | "🎆" | "🎉" | "🦃";

const HOLIDAY_ALPHABETICAL_TRANSITION: Record<Holiday, Holiday> = {
    "🎃": "🎆", // Halloween to New Year
    "🎆": "🎉", // New Year to Valentine's Day
    "🎉": "🦃", // Valentine's Day to Thanksgiving
    "🦃": "🎅", // Thanksgiving to Christmas
    "🎅": "🎃", // Christmas back to Halloween
};

const HOLIDAY_YEAR_TRANSITION: Record<Holiday, Holiday> = {
    "🎅": "🦃", // Christmas to Thanksgiving
    "🦃": "🎆", // Thanksgiving to New Year
    "🎆": "🎉", // New Year to Valentine's Day
    "🎉": "🎃", // Valentine's Day to Halloween
    "🎃": "🎅", // Halloween to Christmas
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
