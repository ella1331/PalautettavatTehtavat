
namespace Ika
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.synttariDT = new System.Windows.Forms.DateTimePicker();
            this.laskeBT = new System.Windows.Forms.Button();
            this.paivinaLB = new System.Windows.Forms.Label();
            this.vuosinaLB = new System.Windows.Forms.Label();
            this.tunteinaLB = new System.Windows.Forms.Label();
            this.minuutteinaLB = new System.Windows.Forms.Label();
            this.sekuntteinaLB = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // synttariDT
            // 
            this.synttariDT.Location = new System.Drawing.Point(196, 64);
            this.synttariDT.Margin = new System.Windows.Forms.Padding(6);
            this.synttariDT.Name = "synttariDT";
            this.synttariDT.Size = new System.Drawing.Size(479, 38);
            this.synttariDT.TabIndex = 0;
            // 
            // laskeBT
            // 
            this.laskeBT.Location = new System.Drawing.Point(750, 62);
            this.laskeBT.Margin = new System.Windows.Forms.Padding(6);
            this.laskeBT.Name = "laskeBT";
            this.laskeBT.Size = new System.Drawing.Size(216, 45);
            this.laskeBT.TabIndex = 1;
            this.laskeBT.Text = "Laske";
            this.laskeBT.UseVisualStyleBackColor = true;
            this.laskeBT.Click += new System.EventHandler(this.laskeBT_Click);
            // 
            // paivinaLB
            // 
            this.paivinaLB.AutoSize = true;
            this.paivinaLB.Location = new System.Drawing.Point(196, 169);
            this.paivinaLB.Name = "paivinaLB";
            this.paivinaLB.Size = new System.Drawing.Size(93, 32);
            this.paivinaLB.TabIndex = 2;
            this.paivinaLB.Text = "label1";
            this.paivinaLB.Visible = false;
            // 
            // vuosinaLB
            // 
            this.vuosinaLB.AutoSize = true;
            this.vuosinaLB.Location = new System.Drawing.Point(196, 248);
            this.vuosinaLB.Name = "vuosinaLB";
            this.vuosinaLB.Size = new System.Drawing.Size(93, 32);
            this.vuosinaLB.TabIndex = 3;
            this.vuosinaLB.Text = "label2";
            this.vuosinaLB.Visible = false;
            // 
            // tunteinaLB
            // 
            this.tunteinaLB.AutoSize = true;
            this.tunteinaLB.Location = new System.Drawing.Point(196, 331);
            this.tunteinaLB.Name = "tunteinaLB";
            this.tunteinaLB.Size = new System.Drawing.Size(93, 32);
            this.tunteinaLB.TabIndex = 4;
            this.tunteinaLB.Text = "label3";
            this.tunteinaLB.Visible = false;
            // 
            // minuutteinaLB
            // 
            this.minuutteinaLB.AutoSize = true;
            this.minuutteinaLB.Location = new System.Drawing.Point(582, 169);
            this.minuutteinaLB.Name = "minuutteinaLB";
            this.minuutteinaLB.Size = new System.Drawing.Size(93, 32);
            this.minuutteinaLB.TabIndex = 5;
            this.minuutteinaLB.Text = "label4";
            this.minuutteinaLB.Visible = false;
            // 
            // sekuntteinaLB
            // 
            this.sekuntteinaLB.AutoSize = true;
            this.sekuntteinaLB.Location = new System.Drawing.Point(582, 248);
            this.sekuntteinaLB.Name = "sekuntteinaLB";
            this.sekuntteinaLB.Size = new System.Drawing.Size(93, 32);
            this.sekuntteinaLB.TabIndex = 6;
            this.sekuntteinaLB.Text = "label5";
            this.sekuntteinaLB.Visible = false;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(582, 331);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(93, 32);
            this.label6.TabIndex = 7;
            this.label6.Text = "label6";
            this.label6.Visible = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(16F, 31F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1600, 872);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.sekuntteinaLB);
            this.Controls.Add(this.minuutteinaLB);
            this.Controls.Add(this.tunteinaLB);
            this.Controls.Add(this.vuosinaLB);
            this.Controls.Add(this.paivinaLB);
            this.Controls.Add(this.laskeBT);
            this.Controls.Add(this.synttariDT);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Margin = new System.Windows.Forms.Padding(6);
            this.Name = "Form1";
            this.Text = "Ikä laskuri";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.DateTimePicker synttariDT;
        private System.Windows.Forms.Button laskeBT;
        private System.Windows.Forms.Label paivinaLB;
        private System.Windows.Forms.Label vuosinaLB;
        private System.Windows.Forms.Label tunteinaLB;
        private System.Windows.Forms.Label minuutteinaLB;
        private System.Windows.Forms.Label sekuntteinaLB;
        private System.Windows.Forms.Label label6;
    }
}

