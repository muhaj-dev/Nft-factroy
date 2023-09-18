"use client";
import React, { useState } from "react";
import { orbitron } from "@/fonts/fonts";
import EditableSection from "@/common/EditableSection";
import TextArea from "@/common/TextArea";

const TeamInformationForm: React.FC = () => {
  const [members, setMembers] = useState<string>("");
  const [twitterUrl, setTwitterUrl] = useState<string>("");
  const [linkedUrl, setLinkedinUrl] = useState<string>("");

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
      Contact Information
      </h2>
      <EditableSection
        title={"Contact’s Full Name"}
        placeholder={"FullName"}
        onChangeHandler={(value: string): void => {
          setMembers(value);
        }}
        // subTitle="Please provide the names each team member and their roles"
      />
      <EditableSection
        title={"Role/Position"}
        placeholder={"Role"}
        onChangeHandler={(value: string): void => {
          setTwitterUrl(value);
        }}
        subTitle="Contact Person's Position/Role in the Business"
        // subTitle="Will be linked with launchpad"
      />
      <EditableSection
        title={"Email Address"}
        placeholder={"Launcpad@gmail.com"}
        onChangeHandler={(value: string): void => {
          setLinkedinUrl(value);
        }}
        // subTitle="Please provide the Linkedin link for each team member"
      />
      <EditableSection
        title={"Phone Number"}
        placeholder={"+234709843792"}
        onChangeHandler={(value: string): void => {
          setLinkedinUrl(value);
        }}
        // subTitle="Please provide the Linkedin link for each team member"
      />

    </div>
  );
};

export default TeamInformationForm;
