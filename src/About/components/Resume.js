import React from 'react';
import './styles/resume.scss';
import resumePDF from '../../assets/resume/erikkimsey_software_engineer_resume.pdf';

export default function Resume() {
	return (
		<div className="resume-container" id="RESUME">
			<div className="text-container resume-sub-container">
				<div className="resume-text">Resume</div>
			</div>
			<div className="image-container resume-sub-container">
				<a href={resumePDF} target="_blank" rel="noopener noreferrer">
					<i className="far fa-file-pdf fa-10x" />
				</a>
			</div>
		</div>
	);
}
