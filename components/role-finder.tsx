"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { roles } from "@/lib/content";

export function RoleFinder() {
  const router = useRouter();
  const [role, setRole] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (role) router.push(`/roles/${role}`);
  }

  return (
    <form className="role-finder" onSubmit={submit}>
      <label htmlFor="role-select">What do you do?</label>
      <div className="role-finder__controls">
        <select
          id="role-select"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="" disabled>
            Choose your role
          </option>
          {roles.map((item) => (
            <option value={item.slug} key={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
        <button className="button button--lime" type="submit">
          Show my role <span aria-hidden="true">→</span>
        </button>
      </div>
      <p>Task-level guidance. No replacement score. No fortune telling.</p>
    </form>
  );
}
