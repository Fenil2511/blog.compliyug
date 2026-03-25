import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a2540 0%, #1c3f6e 100%)',
                    borderRadius: 7,
                    position: 'relative',
                }}
            >
                {/* Shield shape via nested divs */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#1c64f2',
                        width: 20,
                        height: 22,
                        borderRadius: '4px 4px 10px 10px',
                    }}
                >
                    <span
                        style={{
                            color: '#ffffff',
                            fontSize: 13,
                            fontWeight: 900,
                            fontFamily: 'serif',
                            letterSpacing: '-0.5px',
                            lineHeight: 1,
                        }}
                    >
                        C
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}
