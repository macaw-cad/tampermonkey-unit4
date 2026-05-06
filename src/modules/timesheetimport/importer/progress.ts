type ProgressData = {
    pending: number;
}

export class Progress {
    private progress: HTMLElement;
    private data: ProgressData;

    constructor(parent: HTMLElement, pending = 0) {
        this.progress = parent.ownerDocument.createElement("span");
        this.progress.classList.add("progress");
        parent.after(this.progress);
        const data = sessionStorage.getItem('import_progress');
        if (data) {
            this.data = JSON.parse(data);
        } else {
            this.data = { pending };
        }
        this.updateUI();
    }

    private save() {
        sessionStorage.setItem('import_progress', JSON.stringify(this.data));
    }

    public updatePending(pending: number) {
        this.data.pending = pending;
        this.save();
        this.updateUI();
    }

    private updateUI() {
        if (this.progress) {
            const text = this.data.pending > 0 ? `${this.data.pending} pending` : '';
            this.progress.textContent = text;
            this.progress.style.display = (this.data.pending > 0) ? 'inline-block' : 'none';
        }
    }

}